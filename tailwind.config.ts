import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsHeight: {
        raw: "(max-height: 742px)",
      },
      sm: "552px",
      md: "768px",
      lg: "1024px",
      xl: "1286px",
      "2xl": "1578px",
    },
    extend: {
      keyframes: {
        "grow-width": {
          "0%": { width: "0" },
          "100%": { width: "var(--target-width)" },
        },
      },
      animation: {
        grow: "grow-width 1s forwards",
      },
    },
  },
}
export default config
