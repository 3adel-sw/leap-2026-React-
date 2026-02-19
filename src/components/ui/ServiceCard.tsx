import React from "react";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  href,
}) => {
  return (
    <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-slate-100 flex flex-col h-full group hover:shadow-md hover:bg-[var(--color-secondary)] hover:-translate-y-1 transition-all duration-300 ease-out">
      {/* Icon with the custom "speech bubble" notch */}
      <div className="relative mb-8 h-14 w-14 shrink-0 rounded-lg bg-[var(--color-secondary)] group-hover:bg-[var(--color-primary)] text-white flex items-center justify-center">
        <Icon size={30} strokeWidth={1.5} />
        <div className="absolute -bottom-2 left-0 h-0 w-0 border-r-[20px] border-r-transparent border-t-[20px] border-t-[var(--color-secondary)] group-hover:border-t-[var(--color-primary)]"></div>
      </div>

      {/* Content */}
      <h3 className="text-left text-[1.6rem] font-bold text-slate-700 mb-4 leading-[1.2] min-h-[4rem] group-hover:text-white">
        {title}
      </h3>
      <p className="text-left text-slate-400 text-md mb-10 group-hover:text-gray-100">
        {truncateText(description, 100)}
      </p>

      {/* Action */}
      <a
        href={href}
        className="flex w-fit items-center gap-3 rounded-full border-2 border-[var(--color-secondary)] px-7 py-2 text-xs font-bold text-[var(--color-secondary)] transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white"
      >
        Read more about
        <ArrowRight size={18} />
      </a>
    </div>
  );
};

export default ServiceCard;
