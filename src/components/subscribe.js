import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "gatsby";
import ReCAPTCHA from "react-google-recaptcha";
import { Fragment, useState } from "react";
import { HiMail } from "react-icons/hi";
import { useForm } from "react-hook-form";

export default function Subscribe() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const reRef = React.useRef();
  let [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [recaptchaPassed, setRecaptchaPassed] = useState(null);

  const onSubmit = async (data) => {
    setDisabled(true);
    const token = await reRef.current.executeAsync();
    data.token = token;
    data.token = token;
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 hover:text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        <HiMail className="inline mr-3 text-lg" />
        Subscribe to Email Updates
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" bg-gradient-to-br to-white from-blue-100 inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-xl text-center font-medium leading-6 text-blue-900 mb-4"
                >
                  Want to Receive our Email Updates?
                </Dialog.Title>
                <form
                  className="grid grid-cols-1 space-y-4"
                  onSubmit={handleSubmit(onSubmit)}
                  method="POST"
                  action="/api/subscribe"
                >
                  <label htmlFor="name" className="block">
                    <h3 className="text-xs text-gray-600 uppercase">
                      Your Name:
                    </h3>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Example: Melissa Bruce"
                      className="w-full p-1 bg-white text-blue-800"
                      {...register("name", {
                        required: "Please provide a name",
                      })}
                    />
                  </label>
                  <label htmlFor="email" className="blox">
                    <h3 className="text-xs text-gray-600 uppercase">
                      Your Email:
                    </h3>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Example: username@yourdomain.com"
                      className="w-full p-1 bg-white text-blue-800"
                      {...register("email", {
                        required: "Please provide your best email address",
                      })}
                    />
                  </label>
                  <ReCAPTCHA
                    sitekey={`6LeIMHIbAAAAAF-Eu5prLZNWXnwaadSsV8OYN1mP`}
                    size="invisible"
                    ref={reRef}
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className={`${
                      disabled && `opacity-25 `
                    } hover:shadow-md  px-4 py-2 text-sm font-medium bg-gradient-to-b from-blue-900 to-blue-700 ${
                      !disabled &&
                      ` hover:from-blue-600 hover:to-blue-400 cursor-pointer`
                    } text-white border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
                    // onClick={closeModal}
                  />
                </form>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    You can unsubscribe anytime. For more details, review our{" "}
                    <Link
                      to="/privacy"
                      className="text-blue-700 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="mt-4"></div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
