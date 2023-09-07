import GoBackBtn from "../components/GoBackBtn";
import ContactTeam from "../forms/contactTeam";

export default function Contact() {
  return (
    <div className="flex justify-center p-12">
      <GoBackBtn />
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className="flex justify-center pb-8 text-6xl text-black font-semibold">
          Contact our team. Let's type together.
        </h1>
        <ContactTeam />
      </div>
    </div>
  );
}
