import FeatureLayout from "../components/FeatureLayout";

const content = {
  title: "Hands down 👋🏻",
  description:
    "In a world dominated by sleek laptops and touchscreen devices, the Adler Typewriter stands as a testament to timeless craftsmanship and the enduring allure of mechanical precision. Beyond its functional attributes and nostalgic charm, one remarkable quality sets the Adler Typewriter apart - its ability to fit perfectly in the hands of every person who touches it. The Adler Typewriter was meticulously designed with ergonomics in mind. Its sturdy frame and well-placed keys allow for a comfortable typing experience.",
};

export default function Feature1() {
  return (
    <FeatureLayout
      featureTitle={content.title}
      featureDescription={content.description}
    />
  );
}
