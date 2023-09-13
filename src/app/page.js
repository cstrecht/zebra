import Image from "next/image";
import Link from "next/link";
import GetInfo from "./forms/getInfo";
import ContactBtn from "./components/ContactBtn";
import zebra1 from "../../public/images/zebra1.jpg";
import zebra2 from "../../public/images/zebra2.jpg";
import zebra3 from "../../public/images/zebra3.jpg";

const items = [
  {
    image: zebra1,
    title: "A Perfect Fit for Every Pair of Hands",
    link: "/feature1",
    altText: "Hands on typewriter",
  },
  {
    image: zebra2,
    title: "Looks good with forniture",
    link: "/feature2",
    altText: "Typewriter's front view",
  },
  {
    image: zebra3,
    title: "Sophisticated printing technology",
    link: "/feature3",
    altText: "Typewriter's back view",
  },
];

export default function Homepage({ searchParams }) {
  const showModal = searchParams?.modal;

  return (
    <main className="flex flex-col items-center gap-8 justify-center">
      <h1 className="mt-12 uppercase text-6xl text-black font-semibold">
        Probably, the coolest Typewriter in the world.
      </h1>
      <h3 className="text-center text-lg uppercase">
        Embrace the timeless allure of typewriters. <br /> Rediscover the joy of
        tactile writing with this classic piece. <br /> Craft your words with
        purpose and precision, one keystroke at a time.
      </h3>

      <div className="flex justify-around gap-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative gap-8 text-2xl w-fit transition-colors duration-300 ease-in-out hover:bg-black group-hover:text-white"
          >
            <Link href={item.link}>
              <Image src={item.image} alt={item.altText} className="" />
              <h2 className="opacity-0 uppercase p-8 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
                {item.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-base">
        <Link
          href="/?modal=true"
          className="text-purple-500 uppercase hover:underline hover:cursor-pointer"
        >
          Sign up here
        </Link>
        <span> for more information about this product...</span>
      </div>
      {showModal && <GetInfo />}
      <p>or</p>
      <ContactBtn />
    </main>
  );
}
