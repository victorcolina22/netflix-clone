import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-red": "var(--brand-red)",
        "brand-red-hover": "var(--brand-red-hover)",
        "transparent-card": "var(--transparent-card)",
      },
    },
  },
  plugins: [],
} satisfies Config;
