import GoBackBtn from "../components/GoBackBtn";
import ContactTeam from "../forms/contactTeam";

export default function Contact() {
  return (
    <div class="flex justify-center p-12">
      <GoBackBtn />
      <div class="mx-auto w-full max-w-[550px]">
        <ContactTeam />
      </div>
    </div>
  );
}
