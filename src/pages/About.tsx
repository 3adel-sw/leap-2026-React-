import PageLayout from "@/components/ui/PageLayout";

import ImageAbout from "@/assets/AboutUs-02.webp";
import AboutSection from "@/components/AboutSection";

import { Lightbulb, Target, ShieldCheck } from "lucide-react";
import ValueCard from "@/components/ui/ValueCard";

const VALUES_DATA = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "To be a leading firm recognized for delivering innovative and high-impact project management services and professional training. Our vision is to set a benchmark in the project management field by integrating global knowledge and best practices. We are committed to delivering projects efficiently and enhancing the competencies of project management professionals worldwide.",
  },
  {
    id: 2,
    icon: Target,
    title: "Our Mission",
    description:
      "Our mission is to provide unique, value-driven project management solutions and professional training services that contribute to the advancement of the project management community. We achieve this through a highly skilled team that possesses a wealth of industry experience, professional expertise, and academic certifications from top project management institutes and universities. At LEAP, we are committed to fostering an environment of continuous learning and professional growth to stay at the forefront of the evolving project management landscape. This ensures our continued success and allows us to maintain long-term trust with our clients.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Our Core Values",
    description:
      "We operate on a foundation of strong values that define our approach to project management and training services:",
    list: [
      "Transparency: Clear, timely, and open communication with our team and clients.",
      "Commitment: A deep sense of responsibility toward achieving our goals, mission, and vision.",
      "Collaboration: Strong teamwork and synergy between clients and team members to drive project success.",
      "Continuous Learning: A commitment to staying ahead through knowledge-sharing, innovation, and skill development.",
      "Quality Excellence: Delivering high-quality services and continuously improving our methodologies.",
      "Integrity: Upholding honesty, ethical practices, and accountability in all business dealings.",
    ],
  },
];

function About() {
  return (
    <PageLayout imageSrc={ImageAbout} alt="About Us">
      <AboutSection />

      <div className="max-w-7xl p-3 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {VALUES_DATA.map((item) => (
          <ValueCard
            key={item.id}
            Icon={item.icon}
            title={item.title}
            description={item.description}
            list={item.list}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export default About;
