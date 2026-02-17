import "../../App.css";
import React from "react";

const cards = [
  {
    title: "Our Vision",
    image: "https://leap-pm.com/front/assets/img/vision.svg",
    description: `
      To be a leading firm recognized for delivering innovative and high-impact
      project management services and professional training. Our vision is to set
      a benchmark in the project management field by integrating global knowledge
      and best practices.
    `,
  },
  {
    title: "Our Mission",
    image: "https://leap-pm.com/front/assets/img/mission.svg",
    description: `
      Our mission is to provide unique, value-driven project management solutions
      and professional training services that contribute to the advancement of
      the project management community.
    `,
  },
  {
    title: "Our Core Values",
    image: "https://leap-pm.com/front/assets/img/value.svg",
    description: `
      Transparency, Commitment, Collaboration, Continuous Learning,
      Quality Excellence, and Integrity.
    `,
  },
];

type CardProps = { title: string; image: string; description: string };

const Card = ({ title, image, description }: CardProps) => (
  <div
    className="
      bg-gray-100
      rounded-xl
      p-8
      flex
      flex-col
      justify-between
      shadow-sm
      hover:shadow-lg
      hover:scale-105
      transition-all
      duration-300
    "
  >
    {/* icon */}
    <div className="mb-6">
      <img src={image} alt={title} className="w-16 h-16 object-contain" />
    </div>

    {/* content */}
    <div className="grow">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  </div>
);

const AboutCard: React.FC = () => (
  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-8
    "
  >
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default AboutCard;
