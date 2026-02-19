export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "var(--color-primary)",
        colorSecondary: "var(--color-secondary)",
        colorFill: "var(--color-fill)",
      },
    },
  },
  plugins: [],
};
