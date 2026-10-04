import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#090a0d",
        "surface-1": "#0f1015",
        "surface-2": "#14161d",
        "surface-dim": "#08090b",
        "surface-container-lowest": "#050608",
        "surface-container-low": "#0f1015",
        "surface-container": "#14161d",
        "surface-container-high": "#1f2128",
        "surface-container-highest": "#2e3038",
        "text-primary": "#f8fafc",
        "text-secondary": "#94a3b8",
        "text-muted": "#475569",
        "accent-cyan": "#00f0ff",
        "accent-violet": "#8b5cf6",
        outline: "#374151",
        "outline-variant": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Geist", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
        display: ["var(--font-syne)", "Syne", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.08em",
        wider: "0.1em",
        widest: "0.14em",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
};

export default config;
