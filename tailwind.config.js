/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      general: ["GeneralSans", "serif"],
    },
    fontSize: {
      h1: [
        "clamp(2.25rem, 9.5vw, 4.875rem)",
        { lineHeight: "115%", fontWeight: 400 },
      ],
      h2: ["2.5rem", { lineHeight: "120%", fontWeight: 500 }],
      subtitle: [
        "1.375rem",
        {
          lineHeight: "200%",
          fontWeight: 500,
        },
      ],
      b1: ["1rem", { lineHeight: "200%" }],
      b2: ["0.875rem", { lineHeight: "200%" }],
      tabs: ["0.875rem", { lineHeight: "140%", fontWeight: 500 }],
      caption: ["0.8125rem"],
    },
    colors: {
      primary: "#AFBCFF",
      secondary: "#CBD3FF",
      tertiary: "#E9ECF9",
      "dark-grey": "#3F3F3F",
      grey: "#f2f2f2",
      white: "#ffffff",
      bg: "#ffffff",
      "text-light-grey": "#C9C9C9",
      "text-dark-grey": "#797979",
    },
    extend: {
      screens: {
        md: "640px",
        lg: "960px",
      },
      gridTemplateColumns: {
        sm: "2rem repeat(4, 1fr) 2rem",
        md: "3rem repeat(8, 1fr) 3rem",
        xl: "calc((100% - 1000px) / 2) repeat(12,1fr) calc((100% - 1000px) / 2)",
        "2xl":
          "calc((100% - 1152px) / 2) repeat(12,1fr) calc((100% - 1152px) / 2)",
      },
      gridTemplateRows: {
        "max-content": "max-content",
      },
      gridColumn: {
        sm: "1 / span 6",
        md: "1 / span 10",
        xl: "1 / span 14",
      },
    },
  },
  plugins: [],
};
