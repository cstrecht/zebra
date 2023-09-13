import FeatureLayout from "../components/FeatureLayout";

const content = {
  title: "Just like the old times 💭",
  description:
    "In the realm of vintage typewriters, the Adler Typewriter stands out as a paragon of printing excellence. With meticulous engineering and attention to detail, this classic machine has earned a reputation for producing impeccable text on paper. Here's why the Adler Typewriter is celebrated for its exceptional printing quality",
};

export default function Feature3() {
  return (
    <FeatureLayout
      featureTitle={content.title}
      featureDescription={content.description}
    />
  );
}
