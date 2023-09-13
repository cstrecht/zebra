import GoBackBtn from "./GoBackBtn";
import ContactBtn from "./ContactBtn";

const FeatureLayout = ({ featureTitle, featureDescription }) => {
  return (
    <section>
      <GoBackBtn />
      <div className="items-center flex flex-col gap-24">
        <h1 className="flex justify-center uppercase text-6xl text-black font-semibold">
          {featureTitle}
        </h1>
        <article className="m-24 text-3xl leading-10 text-center">
          {featureDescription}
        </article>
        <ContactBtn />
      </div>
    </section>
  );
};

export default FeatureLayout;
