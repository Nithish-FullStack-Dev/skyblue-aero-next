import { FeaturesAlt } from "@/components/ui/features-alt";

const features = [
  // {
  //   id: 1,
  //   title: "Pets",
  //   description:
  //     "Traveling with pets on a private jet means comfort and peace of mind for both owners and their companions. Our dedicated team ensures seamless arrangements, from documentation and safety to onboard care.",
  //   image: "/images/pet.webp",
  // },
  {
    id: 2,
    title: "24/7 availability",
    description:
      "Our team operates around the clock to ensure every journey is seamlessly managed—anytime, anywhere.",
    image: "/images/avail.png",
  },
  {
    id: 3,
    title: "Onboard services",
    description:
      "Indulge in thoughtfully curated onboard experiences, including premium catering, refined interiors, and personalized service designed around your preferences.",
    image: "/images/onb.png",
  },
  {
    id: 4,
    title: "Efficient",
    description:
      "Optimized routing and expert crew coordination ensure reduced travel time, operational efficiency, and a seamless end-to-end experience.",
    image: "/images/ef.png",
  },
];

export const DemoAlt = () => {
  return <FeaturesAlt features={features} />;
};