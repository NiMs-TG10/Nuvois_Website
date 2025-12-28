/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom Keyframes for the Animation
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        // --- ADDED WOBBLE KEYFRAMES ---
        "wobble-text": {
          "0%, 100%": { transform: "rotate(0deg) translateX(0px)" },
          "25%": { transform: "rotate(-1deg) translateX(-1px)" },
          "50%": { transform: "rotate(1deg) translateX(1px)" },
          "75%": { transform: "rotate(-0.5deg) translateX(-0.5px)" },
        },
        // --- END WOBBLE KEYFRAMES ---
      },
      // Mapping the Keyframe to an Animation Utility
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
        // --- ADDED WOBBLE ANIMATION MAPPING ---
        "wobble-text": "wobble-text 0.6s ease-in-out infinite alternate",
        // --- END WOBBLE ANIMATION MAPPING ---
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};