/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        primaryLight: "#EFF6FF",
        borderColor: "#E5E7EB",
        textMain: "#111827",
        textMuted: "#6B7280",
        cardBg: "#FFFFFF",
        sectionBg: "#F9FAFB",
        primary: "#3B82F6",
        darkBg: "#111827",
      },

      spacing: {
        section: "24px",
        card: "20px",
      },

      borderRadius: {
        card: "12px",
      },

      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
