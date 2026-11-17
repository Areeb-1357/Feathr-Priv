import type { Config } from "tailwindcss";

// FEATHR palette: obsidian black, graphite surfaces, cool platinum text,
// and a single muted "frost" steel-blue accent. No neon, no warm colors.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#06080B",
        graphite: "#0D1117",
        steel: "#161C24",
        line: "#232B36",
        platinum: "#E8ECF2",
        mist: "#8D98A8",
        frost: "#B7C4D8",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        dash: {
          to: { strokeDashoffset: "-160" },
        },
        scan: {
          "0%": { top: "-12%" },
          "100%": { top: "112%" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        dash: "dash 4s linear infinite",
        scan: "scan 9s linear infinite",
        pulseSoft: "pulseSoft 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
