import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF3EC",
        softwhite: "#FFFDFB",
        blush: {
          DEFAULT: "#F3C6D0",
          dark: "#E8A9C3",
        },
        lavender: {
          DEFAULT: "#C9B6E4",
          dark: "#B9A0E0",
        },
        lilac: "#D8C7EA",
        periwinkle: "#A9B8E8",
        babyblue: "#BFE1F0",
        warmgrey: "#8A8078",
        ink: "#3A3440",
        charcoal: {
          DEFAULT: "#2A2530",
          surface: "#352E3D",
          border: "#463D4F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(120% 120% at 20% 10%, #F3C6D0 0%, #D8C7EA 35%, #BFE1F0 70%, transparent 100%)",
        "hero-gradient-dark":
          "radial-gradient(120% 120% at 20% 10%, rgba(232,169,195,0.25) 0%, rgba(185,160,224,0.25) 35%, rgba(169,184,232,0.15) 70%, transparent 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(201, 182, 228, 0.35)",
        "soft-dark": "0 10px 40px -10px rgba(0,0,0,0.5)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        sparkle: "sparkle 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
