import Image from "next/image";
import Link from "next/link";
import zebra1 from "../../public/zebra1.jpg";
import zebra2 from "../../public/zebra2.jpg";
import zebra3 from "../../public/zebra3.jpg";
import GetInfo from "./form/getInfo";

const items = [
  {
    image: zebra1,
    title: "Fits perfectly with your hands",
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
    <main className="flex flex-col items-center gap-12 justify-center">
      <h1 className="text-5xl my-24">
        Probably, the coolest Typewriter in the world.
      </h1>
      <div className="flex justify-around gap-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative gap-8 text-2xl w-fit transition-colors duration-300 ease-in-out hover:bg-black group-hover:text-white"
          >
            <Link href={item.link}>
              <Image src={item.image} alt={item.altText} className="" />
              <h2 className="opacity-0 p-8 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
                {item.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-base">
        <Link
          href="/?modal=true"
          className="text-purple-500 hover:underline hover:cursor-pointer"
        >
          Sign up here
        </Link>
        <span> for more information</span>
      </div>
      {showModal && <GetInfo />}
    </main>
  );
}
