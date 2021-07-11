import React, { useState, useEffect } from "react";
import axios from "axios";
import Seo from "../components/seo";
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Thinker from "../components/thinker";
import { HiCloudDownload, HiCalendar, HiMap } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

export default function Calendar({ path }) {
  const [data, setData] = useState({ items: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const axiosData = await axios
        .get(
          `https://content.googleapis.com/calendar/v3/calendars/${process.env.GATSBY_GOOGLE_CALENDAR_ID}/events?key=${process.env.GATSBY_GOOGLE_API_KEY}&singleEvents=true&orderBy=startTime`
        )
        .then((response) => {
          const futureEvents = response.data.items.filter(
            (item) =>
              new Date(item.start.dateTime) > new Date().setHours(0, 0, 0, 0)
          );
          setLoading(false);
          return futureEvents;
        })
        .catch((error) => {
          console.log(error);
        });
      setData({ items: axiosData });
    }
    fetchData();
  }, []);
  if (loading) {
    return (
      <>
        <Seo title='Calendar' />
        <Layout path={path}>
          <div className='mx-auto max-w-md flex flex-col justify-center items-center h-screen'>
            <svg
              className='animate-spin -ml-1 mr-3 h-12 w-12 text-blue-700 block'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          </div>
        </Layout>
      </>
    );
  }
  return (
    <>
      <Seo title='Calendar' />
      <Layout path={path}>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
          <header className='mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center'>
            <div>
              <PageTitle
                title='Calendar'
                icon={
                  <HiCalendar className='text-3xl sm:text-5xl lg:text-6xl text-blue-700 mt-0 inline-block' />
                }
              />
            </div>

            <h2 className='font-medium text-lg text-gray-700'>
              Upcoming Events for MC3 Members
            </h2>
            <p className='text-md max-w-md italic mt-2 sm:mt-4 lg:mt-6'>
              The events scheduled below are subject to change and will be
              updated as we have more information. Check back often for updated
              details.
            </p>
          </header>
          <hr />
          <section className='grid grid-cols-1 gap-2 max-w-2xl mx-auto my-2 sm:my-4 lg:my-6 '>
            {data.items.length ? (
              data.items.map((item, i) => {
                const urlSearchParams = new URLSearchParams(item.htmlLink);
                const params = Object.fromEntries(urlSearchParams.entries());
                const copyUrl = `https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=${params["https://www.google.com/calendar/event?eid"]}&tmsrc=${process.env.GATSBY_GOOGLE_CALENDAR_ID}&catt=false&pprop=HowCreated:DUPLICATE&hl=en&scp=ONE`;
                return (
                  <div key={item.id}>
                    <div className='rounded-md shadow-md flex flex-col sm:flex-row mb-1 my-1 sm:my-2 lg:my-3 bg-gray-50 hover:bg-gray-100 hover:shadow-xl'>
                      <aside className='bg-blue-700 flex-none rounded-tl-md rounded-tr-md sm:rounded-tr-none sm:rounded-bl-md text-white flex flex-col justify-center w-full sm:w-32 text-center p-2'>
                        <p className='text-xl'>
                          {new Date(
                            item.start.dateTime
                          ).toLocaleDateString("en-US", { weekday: "long" })}
                        </p>
                        <p className='text-md'>
                          {new Date(
                            item.start.dateTime
                          ).toLocaleDateString("en-US", { month: "long" })}
                        </p>
                        <p className='text-5xl font-bold'>
                          {new Date(
                            item.start.dateTime
                          ).toLocaleDateString("en-US", { day: "numeric" })}
                        </p>
                        <p className='text-lg'>
                          {new Date(item.start.dateTime).toLocaleTimeString(
                            ["en-US"],
                            {
                              timeStyle: "short",
                            }
                          )}
                        </p>
                      </aside>
                      <article className='w-full flex items-center p-2 sm:p-3 lg:p-4 overflow-hidden'>
                        <div className='flex-1'>
                          <h3 className='text-2xl font-semibold text-center'>
                            {item.summary}
                          </h3>
                          {item.description && (
                            <>
                              <h4 className='text-sm font-semibold text-gray-700'>
                                Additional Event Details:
                              </h4>
                              <div
                                className='text-base event-description'
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}
                              ></div>
                            </>
                          )}
                          {item.location && (
                            <div className='text-center'>
                              <p className='text-sm font-semibold text-gray-700 my-1 text-left'>
                                Event Location
                              </p>
                              <p className='text-sm sm:text-xs my-1 text-left'>
                                {item.location}
                              </p>
                              <a
                                href={`https://maps.google.com/?daddr=${item.location}`}
                                className='mx-auto text-white px-3 py-2 bg-blue-700 rounded-md inline-block my-3 sm:my-2'
                              >
                                <HiMap className='inline text-xl' /> Get
                                Directions
                              </a>
                            </div>
                          )}
                          <div className='flex justify-center'>
                            <a
                              href={copyUrl}
                              className='inline-block mx-auto my-4 px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 hover:text-black'
                            >
                              <FcGoogle className='inline mr-2 text-xl' /> Add
                              to Your Calendar
                            </a>
                          </div>

                          {item.attachments ? (
                            <ul className='flex flex-col sm:flex-row space-between items-center justify-center my-6 sm:my-3 space-x-0 sm:space-x-2 lg:space-x-3 space-y-6 sm:space-y-0'>
                              {item.attachments.map((file) => {
                                return (
                                  <li
                                    key={file.fileId}
                                    className='px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md'
                                  >
                                    <a
                                      href={file.fileUrl}
                                      title={file.title}
                                      className=' text-gray-800 hover:text-black'
                                    >
                                      <HiCloudDownload className='inline mr-2 text-xl' />
                                      Download Attachment
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            ""
                          )}
                        </div>
                      </article>
                    </div>
                    {i === data.items.length - 1 ? (
                      ""
                    ) : (
                      <hr className='mt-6 block' />
                    )}
                  </div>
                );
              })
            ) : (
              <div className='max-w-md mx-auto flex flex-col justify-center items-center'>
                <p className='text-3xl font-semibold text-blue-700'>
                  Oops! It's not you, it's us. <br />
                  We're normally busier than this...
                </p>
                <Thinker styles='w-full' />
              </div>
            )}
          </section>
        </div>
      </Layout>
    </>
  );
}
