// const flowbite = require("flowbite-react/tailwind");

const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
});

// flowbite.plugin()
