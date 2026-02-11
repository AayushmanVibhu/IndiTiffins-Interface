import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#8B0000',
          red2: '#B22222',
          saffron: '#F59E0B',
          cream: '#FFF7ED',
          green: '#166534',
          charcoal: '#111827',
          muted: '#6B7280',
          border: '#E5E7EB',
        },
        primary: {
          DEFAULT: '#F59E0B',
          dark: '#B45309',
        },
        secondary: {
          DEFAULT: '#166534',
        },
        accent: {
          DEFAULT: '#EF4444',
        },
        background: '#FFFBF5',
        surface: '#FFFFFF',
        text: {
          DEFAULT: '#111827',
          muted: '#4B5563',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'card': '1rem',
        'button': '0.5rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
