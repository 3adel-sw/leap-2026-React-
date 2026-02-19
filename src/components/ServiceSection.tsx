import {
  ShieldCheck,
  FileText,
  DollarSign,
  Network,
  Building2,
  GraduationCap,
} from "lucide-react";
import ServiceCard from "./ui/ServiceCard";

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Risk Management",
    description:
      "Identification, analysis, and mitigation of project risks through structured plans and continuous monitoring.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Claims Management",
    description:
      "Preparation of delay and cost claims supported by contractual analysis and international best practices.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Cost Management",
    description:
      "Budget planning, cost control implementation, forecasting, and variance analysis to ensure projects delivery within budget.",
    icon: DollarSign,
  },
  {
    id: 4,
    title: "PMIS Implementation",
    description:
      "Deployment of ERP systems, document management systems, and project management software packages to streamline digital workflows and enhance control.",
    icon: Network,
  },
  {
    id: 5,
    title: "PMO Establishment",
    description:
      "Design and implementation of tailored PMO frameworks and governance models aligned with business objectives.",
    icon: Building2,
  },
  {
    id: 6,
    title: "Training & Development Services",
    description:
      "Delivery of industry-focused training programs across key project control disciplines, available online and in-person.",
    icon: GraduationCap,
  },
];

type PageProps = {
  title: string;
  description: string;
};

const ServicesSection: React.FC<PageProps> = ({ title, description }) => {
  return (
    <section className="bg-[#F8FAFC] py-20 px-3">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 space-y-3">
          <h2 className="text-3xl font-extrabold text-gray-700 tracking-tight">
            {title}
          </h2>
          <p className="text-2xl text-slate-500 font-semibold leading-[1.3] mb-10 mt-2">
            {description}
          </p>
        </div>

        {/* The Loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              href={`/services/${service.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
