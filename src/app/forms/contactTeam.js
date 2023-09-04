export default function ContactTeam() {
  return (
    <form>
      <h1 className="flex justify-center pb-8 text-6xl text-black font-semibold">
        Contact our team. Let's type together.
      </h1>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-12">
            <input
              type="text"
              placeholder="First Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-purple-500 focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-12">
            <input
              type="text"
              placeholder="Last Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-purple-500 focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="mb-12">
        <input
          type="email"
          placeholder="type@write.com"
          min="0"
          class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-purple-500 focus:shadow-md"
        />
      </div>
      <textarea
        id="message"
        rows="4"
        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-purple-500 focus:shadow-md"
        placeholder="Write your thoughts here..."
      ></textarea>
      <div>
        <button class="hover:shadow-form rounded-md mt-12 bg-purple-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Contact the team
        </button>
      </div>
    </form>
  );
}
