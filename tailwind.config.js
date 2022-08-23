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
        "clamp(2.25rem, 9.8vw, 5.063rem)",
        { lineHeight: "110%", fontWeight: 400 },
      ],
      h2: ["5.063rem", { lineHeight: "120%", fontWeight: 400 }],
      h3: ["3.375rem", { lineHeight: "120%", fontWeight: 500 }],
      subtitle: [
        "1.5rem",
        {
          lineHeight: "120%",
          fontWeight: 500,
          letterSpacing: "clamp(2px, 0.5vw, 3px)",
        },
      ],
      subtitle2: [
        "2.25rem",
        {
          lineHeight: "120%",
          fontWeight: 400,
        },
      ],
      subtitle3: [
        "1.5rem",
        {
          lineHeight: "120%",
          fontWeight: 400,
        },
      ],
      b1: ["1.25rem", { lineHeight: "150%" }],
      b2: ["1rem", { lineHeight: "150%" }],
      btn: ["1rem", { lineHeight: "110%", fontWeight: 500 }],
    },
    colors: {
      primary: "#AFBCFF",
      secondary: "#CBD3FF",
      tertiary: "#E9ECF9",
      "dark-grey": "#3F3F3F",
      grey: "#EBEBEB",
      white: "#ffffff",
      bg: "#F8F8F8",
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
        xl: "calc((100% - 1152px) / 2) repeat(12,1fr) calc((100% - 1152px) / 2)",
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
