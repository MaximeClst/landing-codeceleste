import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // si tu as un paquet ui externe
    "./node_modules/ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"], // pour le .dark { … }
  theme: {
    extend: {
      fontFamily: {
        // si tu veux surcharger le sans avec ta variable
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // tw-animate-css
    // si tu utilises un plugin UI externe
    // require("ui/tailwind.config.cjs")
  ],
};
