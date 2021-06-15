import React, { useState, useEffect } from "react";
import axios from "axios";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { HiCloudDownload, HiCalendar } from "react-icons/hi";

export default function Calendar(props) {
  const [data, setData] = useState({ items: [] });
  useEffect(() => {
    async function fetchData() {
      const axiosData = await axios
        .get(
          `https://content.googleapis.com/calendar/v3/calendars/${process.env.GATSBY_GOOGLE_CALENDAR_ID}/events?key=${process.env.GATSBY_GOOGLE_API_KEY}&singleEvents=true&orderBy=startTime`
        )
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
      setData({ items: axiosData.data.items });
    }
    fetchData();
  }, []);
  if (data.items.length === 0) {
    return <h2>Loading Calendar Events Now...</h2>;
  }
  return (
    <Layout path={props.path}>
      <Seo title='Event Calendar' />
      <main className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center'>
          <h1 className='text-3xl font-bold text-blue-700'>Calendar</h1>
          <h2 className='font-light text-lg text-gray-700'>
            Upcoming Events for MC3 Members
          </h2>
          <HiCalendar className='text-3xl sm:text-5xl lg:text-6xl text-blue-700 mt-3' />
          <p className='text-md max-w-md italic mt-2 sm:mt-4 lg:mt-6'>
            The events scheduled below are subject to change and will be updated
            as we have more information. Check back often for updated details.
          </p>
        </header>
        <hr />
        <section className='grid grid-cols-1 gap-2 max-w-2xl mx-auto my-2 sm:my-4 lg:my-6 '>
          {data.items.map((item, i) => {
            if (new Date(item.start.dateTime) > new Date()) {
              return (
                <div key={item.id}>
                  <div className='rounded-md shadow-md flex flex-col sm:flex-row mb-1 my-1 sm:my-2 lg:my-3 bg-gray-50 hover:bg-gray-100 hover:shadow-xl'>
                    <aside className='bg-blue-700 flex-none rounded-tl-md rounded-tr-md sm:rounded-tr-none sm:rounded-bl-md text-white flex flex-col justify-center w-full sm:w-32 text-center p-2'>
                      <p className='text-md'>
                        {new Date(
                          item.start.dateTime
                        ).toLocaleDateString("en-US", { month: "short" })}
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
                    <article className='flex-1 flex items-center p-2 sm:p-3 lg:p-4 overflow-hidden'>
                      <div>
                        <h3 className='text-2xl font-semibold'>
                          {item.summary}
                        </h3>
                        {item.description ? (
                          <>
                            <h4 className='text-sm font-semibold text-gray-700'>
                              Additional Event Details:
                            </h4>
                            <p
                              className='text-base event-description'
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></p>
                          </>
                        ) : (
                          ""
                        )}

                        {item.attachments ? (
                          <ul className='flex flex-col sm:flex-row space-between items-center justify-center my-6 sm:my-3 space-x-0 sm:space-x-2 lg:space-x-3 space-y-6 sm:space-y-0'>
                            {item.attachments.map((file) => {
                              return (
                                <li
                                  key={file.fileId}
                                  className='t px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md'
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
            } else {
              return null;
            }
          })}
        </section>
        <ul></ul>
      </main>
    </Layout>
  );
}
