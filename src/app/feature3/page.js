import FeatureLayout from "../components/FeatureLayout";

const content = {
  title: "Just like the old times 💭",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus risus erat, et volutpat justo viverra in. Maecenas rhoncus mi id ex laoreet gravida. Cras tristique mi non quam malesuada vehicula ac nec enim. Duis id ligula porttitor, lacinia nisl et, porta tortor. Nulla lobortis porttitor efficitur. Fusce interdum ex sit amet metus dapibus, et eleifend neque sollicitudin. Nam egestas consectetur sem, ullamcorper vestibulum arcu bibendum vel. Quisque elit tortor, pulvinar in libero sit amet, hendrerit elementum neque. Praesent malesuada elementum ex, ac pulvinar lacus tincidunt eget. Sed porttitor volutpat sem. Duis posuere lacus nec tortor maximus, non ultricies nulla fringilla. Duis tincidunt et velit vel congue. Donec semper nunc arcu, non ultricies sem rutrum vel.",
};

export default function Feature3() {
  return (
    <FeatureLayout
      featureTitle={content.title}
      featureDescription={content.description}
    />
  );
}
