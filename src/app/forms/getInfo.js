"use client";
import Link from "next/link";

//Get the user's input informations:
function isInputNamedElement(e) {
  return "value" in e && "name" in e;
}

export default function GetInfo() {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    await fetch("api/email", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
      }),
    });
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
                  <label className="block text-gray-700 font-bold text-lg mb-2">
                    Need to know more? Well...
                  </label>
                  <p className="text-base leading-6 my-8">
                    Looks like you are interested in knowing more about this
                    product! Well... let me just warn you that this page is not
                    official. This is a project build for educational proposes.
                    However, we do have informations to share! Just give me or
                    contact and you will receive and keep a look at your inbox!
                  </p>
                  <div className="flex flex-col gap-6">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="What should we call you?"
                    />
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your best email"
                    />
                  </div>
                </div>
                <div className="gap-2 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-purple-500 "
                  >
                    Send me more info
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
