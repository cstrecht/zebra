"use client";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ContactTeam() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("data", data);
        console.log("errors", Object.keys(errors));
        window.alert("Thanks for your contact! Click OK to continue.");
        reset();
      }, 1000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contactForm">
      {isSubmitting && isValid ? (
        <LoadingSpinner />
      ) : (
        <section>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-12">
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "First name is required",
                    },
                  })}
                  placeholder="First Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-purple-500 focus:shadow-md"
                />
                <p className="absolute text-red-700 text-sm">
                  {errors.name?.message}
                </p>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-12">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Last name is required",
                    },
                  })}
                  placeholder="Last Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-purple-500 focus:shadow-md"
                />
                <p className="absolute text-red-700 text-sm">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: { value: /.+@.+/, message: "Invalid Email" },
              })}
              placeholder="type@write.com"
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-purple-500 focus:shadow-md"
            />
            <p className="absolute text-red-700 text-sm">
              {errors.email?.message}
            </p>
          </div>
          <textarea
            type="text"
            id="contactText"
            name="contactText"
            rows="4"
            {...register("contactText", {
              required: {
                value: true,
                message: "Don't you have something to say?",
              },
            })}
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-purple-500 focus:shadow-md"
            placeholder="Write your thoughts here..."
          ></textarea>
          <p className="absolute text-red-700 text-sm">
            {errors.contactText?.message}
          </p>
          <div>
            <button
              type="submit"
              form="contactForm"
              value="Submit"
              className="hover:shadow-form hover:underline rounded-md mt-12 bg-purple-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Contact the team
            </button>
          </div>
        </section>
      )}
    </form>
  );
}
