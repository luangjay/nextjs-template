import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        navy: {
          "100": "hsl(var(--navy-100))",
          "90": "hsl(var(--navy-90))",
          "80": "hsl(var(--navy-80))",
          "70": "hsl(var(--navy-70))",
        },
        royal: {
          "100": "hsl(var(--royal-100))",
          "90": "hsl(var(--royal-90))",
          "80": "hsl(var(--royal-80))",
          "70": "hsl(var(--royal-70))",
        },
        sapphire: {
          "100": "hsl(var(--sapphire-100))",
          "80": "hsl(var(--sapphire-80))",
          "60": "hsl(var(--sapphire-60))",
          "40": "hsl(var(--sapphire-40))",
        },
        cornflower: {
          "100": "hsl(var(--cornflower-100))",
          "70": "hsl(var(--cornflower-70))",
          "40": "hsl(var(--cornflower-40))",
          "8": "hsl(var(--cornflower-8))",
        },
        neutral: {
          "100": "hsl(var(--neutral-100))",
          "90": "hsl(var(--neutral-90))",
          "80": "hsl(var(--neutral-80))",
          "70": "hsl(var(--neutral-70))",
          "60": "hsl(var(--neutral-60))",
          "50": "hsl(var(--neutral-50))",
          "40": "hsl(var(--neutral-40))",
          "30": "hsl(var(--neutral-30))",
          "20": "hsl(var(--neutral-20))",
          "10": "hsl(var(--neutral-10))",
          "5": "hsl(var(--neutral-5))",
          "0": "hsl(var(--neutral-0))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        brand: ["var(--font-brand)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
