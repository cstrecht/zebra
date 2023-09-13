"use client";
import Link from "next/link";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState } from "react";

//Get the user's input informations:
function isInputNamedElement(e) {
  return "value" in e && "name" in e;
}

export default function GetInfo() {
  const [state, setState] = useState();

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });
    setState("loading");
    console.log(formData);

    await fetch("api/email", {
      method: "POST",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
      }),
    });
    setState("sent");
  }
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <form onSubmit={handleOnSubmit}>
                <div className="mb-4">
                  <label className="block font-bold text-xl uppercase text-purple-500">
                    Need to know more? Well...
                  </label>
                  <p className="text-base leading-6 my-8">
                    It appears that you are interested in learning more about
                    this product! Well, let me just caution you that this page
                    is not official. It&apos;s a project built for educational
                    purposes. However, we do have information to share! Just
                    provide me with your contact details, and you will receive
                    updates in your inbox.
                  </p>
                  <div className="flex flex-col gap-6">
                    <input
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="What should we call you?"
                    />
                    <input
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your best email"
                    />
                  </div>
                </div>
                <div className="gap-2 py-3 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-purple-500"
                  >
                    {state === "loading" ? (
                      <LoadingSpinner />
                    ) : state === "sent" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    ) : (
                      <p>Send me more info</p>
                    )}
                  </button>
                  <Link
                    href="/"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 "
                  >
                    Close
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
