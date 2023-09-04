import Link from "next/link";

export default function ContactBtn() {
  return (
    <Link href="/contact">
      <button className="bg-purple-500 py-4 text-white hover:underline px-6 rounded-md">
        Contact us!
      </button>
    </Link>
  );
}
