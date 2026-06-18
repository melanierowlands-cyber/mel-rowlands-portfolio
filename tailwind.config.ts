import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        "paper-alt": "var(--color-paper-alt)",
        surface: "var(--color-surface)",
        line: "var(--color-line)",
        ink: "var(--color-ink)",
        "ink-muted": "var(--color-ink-muted)",
        accent: "var(--color-accent)",
        "on-accent": "var(--color-on-accent)",
        "proj-ingenio": "var(--color-proj-ingenio)",
        "proj-wildlife": "var(--color-proj-wildlife)",
        "proj-huddle": "var(--color-proj-huddle)",
        "footer-bg": "var(--color-footer-bg)",
        // theme alias — overridden per case study via [data-theme]
        theme: "var(--color-theme, var(--color-accent))",
        mark: "var(--color-mark, var(--color-accent))",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      spacing: {
        // design-system spacing scale (px)
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
        "5xl": "96px",
        "6xl": "128px",
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "24px",
        xl: "32px",
        full: "999px",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
