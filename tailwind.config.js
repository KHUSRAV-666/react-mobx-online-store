/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      e_sx: "320px",
      // => @media (min-width: 320px) { ... }
      sx: "490px",
      // => @media (min-width: 490px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      content: {
        bg_add_to_cart: 'url("/src/assets/cart.svg")',
        bg_arrow_up: 'url("/src/assets/arrow_up.svg")',
      },
    },
    colors: {
      transparent: "#fff0",
      white: "#fff",
      black: "#000",

      // ===================================
      x_blue: "#0891b2", //blu information

      x_neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a",
      },
      x_red: {
        DEFAULT: "#ff0000",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
      },
      x_orange: {
        DEFAULT: "#ff6700", //my color
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
      },
      x_green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16",
      },
      x_cyan: {
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
      },
      x_indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".add_to_cart_shadow": {
          boxShadow: "0 0 20px rgb(0 0 0 / 10%)",
        },
        ".round_close_shadow": {
          boxShadow: "0 0 6px #000000bf",
        },
        ".form_group_shadow": {
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.04)",
        },
        // FORM INPUT CLASSES ===================================================================================
        ".input_border_focus_classes": {
          border: "1px solid #26a69a",
          boxShadow: "0 0px 3px -1px #26a69a",
        },
        ".input_border_success_classes": {
          border: "1px solid #22c55e",
          boxShadow: "0 0px 3px -1px #22c55e",
        },
        ".input_border_error_classes": {
          border: "1px solid #ff0000",
          boxShadow: "0 0px 3px -1px #ff0000",
        },
        // BURGER CLASSES ===================================================================================
        ".burger_clicked_first": {
          transform: "rotate(45deg) translate(7px, 12px)",
          transition: "ease-out 0.5s",
        },
        ".burger_clicked_first_max_lg": {
          transform: "rotate(45deg) translate(6px, 9px)",
          transition: "ease-out 0.5s",
        },
        ".burger_clicked_first_max_md": {
          transform: "rotate(45deg) translate(4px, 10px)",
          transition: "ease-out 0.5s",
        },
        ".burger_clicked_second": {
          transform: "translate(-50%, 0)",
          transition: "ease-out 0.5s",
          opacity: "0",
          height: "0",
        },
        ".burger_clicked_third": {
          transform: "rotate(-45deg) translate(7px, -12px)",
          transition: "ease-out 0.5s",
        },
        ".burger_clicked_third_max_lg": {
          transform: "rotate(-45deg) translate(6px, -9px)",
          transition: "ease-out 0.5s",
        },
        ".burger_clicked_third_max_md": {
          transform: "rotate(-45deg) translate(4px, -10px)",
          transition: "ease-out 0.5s",
        },
        ".burger_unclicked_all": {
          transform: "rotate(0) translate(0)",
          transition: "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s",
        },
      });
    }),
  ],
};
