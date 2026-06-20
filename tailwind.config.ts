import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--bg-base)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        subtle: "var(--bg-subtle)",
        "primary-border": "var(--border-default)",
        "subtle-border": "var(--border-subtle)",
        "copy-primary": "var(--text-primary)",
        "copy-secondary": "var(--text-secondary)",
        "copy-muted": "var(--text-muted)",
        "copy-faint": "var(--text-faint)",
        brand: "var(--accent-primary)",
        "brand-dim": "var(--accent-primary-dim)",
        ai: "var(--accent-ai)",
        "ai-text": "var(--accent-ai-text)",
        error: "var(--state-error)",
        success: "var(--state-success)",
        warning: "var(--state-warning)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
}

export default config
