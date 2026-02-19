import React from "react";
import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  list?: string[];
}

const ValueCard: React.FC<ValueCardProps> = ({
  Icon,
  title,
  description,
  list,
}) => {
  return (
    <div className="bg-gray-100 rounded-3xl p-4 flex flex-col h-full shadow-sm transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-2">
      {/* Speech Bubble Icon Box */}
      <div className="relative mb-10 w-16 h-16 bg-[var(--color-secondary)] rounded-xl flex items-center justify-center text-white shrink-0">
        <Icon size={34} strokeWidth={1.5} />
        {/* The "speech bubble" notch */}
        <div className="absolute -bottom-2 left-0 w-0 h-0 border-t-[20px] border-t-[var(--color-secondary)] border-r-[20px] border-r-transparent"></div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-extrabold text-gray-800 mb-6 tracking-tight">
        {title}
      </h3>

      {/* Description Content */}
      <div className="text-gray-700 leading-relaxed text-lg space-y-4">
        <p>{description}</p>

        {/* Render list if it exists (for Core Values) */}
        {list && (
          <ul className="space-y-3 pt-2">
            {list.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-[var(--color-secondary)] font-bold">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ValueCard;
