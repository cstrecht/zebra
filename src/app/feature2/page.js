import FeatureLayout from "../components/FeatureLayout";

const content = {
  title: "A vintage look for your office 👀",
  description:
    "In the ever-evolving world of interior design, where trends come and go, and styles shift with the seasons, there exists a rare gem - the Adler Typewriter. Its enduring charm and timeless elegance make it a striking addition to any living space, seamlessly complementing a wide range of furniture styles. Here's why the Adler Typewriter looks cool with any furniture",
};

export default function Feature2() {
  return (
    <FeatureLayout
      featureTitle={content.title}
      featureDescription={content.description}
    />
  );
}
