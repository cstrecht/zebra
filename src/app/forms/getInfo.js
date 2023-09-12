"use client";
import Link from "next/link";

export default function GetInfo() {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold text-lg mb-2">
                    Need to know more?
                  </label>
                  <p className="text-xs my-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eget dolor eget orci volutpat suscipit iaculis eget
                    lectus. Maecenas bibendum feugiat lectus vitae cursus. Proin
                    fringilla tellus nec tempus tristique. Integer feugiat nulla
                    eleifend sapien consequat fringilla.
                  </p>
                  <div className="flex flex-col gap-6">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="What should we call you?"
                    />
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Your best email"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-gray-50 gap-2 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <Link
                href="/"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-purple-500 "
              >
                Send me more info
              </Link>
              <Link
                href="/"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 "
              >
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
