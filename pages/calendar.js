import axios from 'axios'
import Head from 'next/head'
import * as React from 'react'
import Layout from '../components/Layout'
import { createClient } from '../prismicio'
import { PrismicRichText } from '@prismicio/react'
import Icon from '../components/Icon'

const CalendarPage = ({ events, page, navigation, siteMetadata, footer }) => {
  const {
    data: {
      canonicalurl,
      metadescription,
      metaimage,
      pagedescription,
      pageheading,
      title,
      twitterimage,
    },
  } = page
  const {
    data: { sitedescription, sitemetaimage, sitetitle, sitetwitterimage },
  } = siteMetadata
  /**
   * DEFINE TEMPLATES
   */
  const templates = {
    heading1: ({ node, children }) => (
      <h1 className="my-2 inline-block text-3xl font-bold text-blue-700 sm:my-4 sm:text-4xl lg:my-6 lg:text-5xl">
        {children}
      </h1>
    ),
    heading2: ({ node, children }) => (
      <h2 className="text-lg font-medium text-slate-700">{children}</h2>
    ),
    paragraph: ({ node, children }) => (
      <p className="text-md mt-2 max-w-md italic sm:mt-4 lg:mt-6">{children}</p>
    ),
  }
  return (
    <Layout
      {...siteMetadata}
      navigation={navigation.data.menuitems}
      path={page.url}
      footer={footer}
    >
      <Head>
        <title>{`${title[0].text} · ${sitetitle[0].text}`}</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={canonicalurl} />
        <meta name="description" content={metadescription || sitedescription} />
        <meta
          property="og:description"
          content={metadescription || sitedescription}
        />
        <meta property="og:url" content={canonicalurl} />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content={metaimage.url || sitemetaimage.url}
        />

        <meta property="twitter:card" content="summary" />

        <meta
          property="twitter:image"
          content={twitterimage.url || sitetwitterimage.url}
        />
      </Head>
      <div className="mx-auto max-w-screen-xl">
        <header className="mb-2 flex flex-col items-center sm:mb-4 lg:mb-6">
          <div className="flex items-center">
            <Icon
              name="Calendar"
              className="inline-block text-3xl text-blue-700 sm:text-5xl lg:text-6xl"
            />
            <PrismicRichText field={title} components={templates} />
          </div>
          <PrismicRichText field={pageheading} components={templates} />
          <PrismicRichText field={pagedescription} components={templates} />
        </header>
        <hr />
        <section className="mx-auto my-2 grid max-w-screen-sm grid-cols-1 gap-2 px-4 sm:my-4 md:px-0 lg:my-6">
          {events.length &&
            events.map((item, i) => {
              let firstChar = item.summary.charAt(0)
              return (
                <div key={item.id}>
                  <div className="my-1 mb-1 flex flex-col rounded-md bg-slate-50 shadow-md hover:bg-slate-100 hover:shadow-xl sm:my-2 sm:flex-row lg:my-3">
                    <aside className="flex w-full flex-none flex-col justify-center rounded-tl-md rounded-tr-md bg-blue-700 p-2 text-center text-white sm:w-32 sm:rounded-tr-none sm:rounded-bl-md">
                      <p className="text-xl">
                        {new Date(item.start.dateTime).toLocaleDateString(
                          'en-US',
                          { weekday: 'long' }
                        )}
                      </p>
                      <p className="text-md">
                        {new Date(item.start.dateTime).toLocaleDateString(
                          'en-US',
                          { month: 'long' }
                        )}
                      </p>
                      <p className="text-5xl font-bold">
                        {new Date(item.start.dateTime).toLocaleDateString(
                          'en-US',
                          { day: 'numeric' }
                        )}
                      </p>
                      <p className="text-lg">
                        {firstChar !== '*'
                          ? new Date(item.start.dateTime).toLocaleTimeString(
                              ['en-US'],
                              {
                                timeStyle: 'short',
                              }
                            )
                          : 'TBA'}
                      </p>
                    </aside>
                    <article className="flex w-full items-center overflow-hidden p-2 sm:p-3 lg:p-4">
                      <div className="flex-1">
                        <h3 className="text-center text-2xl font-semibold">
                          {item.summary}
                        </h3>
                        {item.description && (
                          <>
                            <h4 className="text-sm font-semibold text-slate-700">
                              Additional Event Details:
                            </h4>
                            <div
                              className="event-description text-base"
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></div>
                          </>
                        )}
                        {item.location && (
                          <div className="text-center">
                            <p className="my-1 text-left text-sm font-semibold text-slate-700">
                              Event Location
                            </p>
                            <p className="my-1 text-left text-sm sm:text-xs">
                              {item.location}
                            </p>
                            <a
                              href={`https://maps.google.com/?daddr=${item.location}`}
                              className="btn btn-secondary mx-auto my-3 text-base-100 sm:my-2"
                            >
                              <Icon name="Map" className="inline text-xl" /> Get
                              Directions
                            </a>
                          </div>
                        )}
                      </div>
                    </article>
                  </div>
                  {i === events.length - 1 ? '' : <hr className="mt-6 block" />}
                </div>
              )
            })}
        </section>
      </div>
    </Layout>
  )
}
export default CalendarPage

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getSingle('calendarpage')
  const navigation = await client.getSingle('mainmenu')
  const footer = await client.getSingle('footer')

  const events = await axios
    .get(
      `https://content.googleapis.com/calendar/v3/calendars/${process.env.GOOGLE_CALENDAR_API}/events?key=${process.env.GOOGLE_API_KEY}&singleEvents=true&orderBy=startTime`
    )
    .then(response => {
      const futureEvents = response.data.items.filter(
        item => new Date(item.start.dateTime) > new Date().setHours(0, 0, 0, 0)
      )
      return futureEvents
    })
    .catch(error => {
      console.log(error)
    })
  return {
    props: {
      navigation,
      page,
      siteMetadata,
      footer,
      events,
    },
    revalidate: 60 * 15,
  }
}
