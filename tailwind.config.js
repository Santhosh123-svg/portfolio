/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        card: "#111827",
        primary: "#E6C79C",
        secondary: "#6366F1",
        textMain: "#F9FAFB",
        textMuted: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
