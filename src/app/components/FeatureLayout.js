import GoBackBtn from "./GoBackBtn";
import ContactBtn from "./ContactBtn";

const FeatureLayout = ({ featureTitle, featureDescription }) => {
  return (
    <section>
      <GoBackBtn />
      <div className="items-center flex flex-col gap-24">
        <h1 className="flex justify-center  text-6xl text-black font-semibold">
          {featureTitle}
        </h1>
        <article className="mx-24">{featureDescription}</article>
        <ContactBtn />
      </div>
    </section>
  );
};

export default FeatureLayout;
