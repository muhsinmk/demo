import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--background)",
        lightGreen: '#ECFAFF',
        darkBlue: '#002A3A',
        lightBlue : '#FFFFFF08'
      },
      backgroundImage: {
        'hero-img': "url('/images/hero-bg.png')", 
        'card-1': "url('/images/card-1.png')",
        'card-2':"url('/images/image-3.png')",
        'card-3':"url('/images/image-2.png')",
      }
    },
  },
  plugins: [],
};
export default config;
