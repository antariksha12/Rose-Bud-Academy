/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      colors: {
        // Core brand palette — kept intentionally small and named,
        // so every usage in the codebase reads as a decision, not a guess.
        primary: {
          DEFAULT: '#166534', // Deep Green — brand, CTAs, active states
          dark: '#12502A',
          light: '#1E7A40',
          tint: '#EAF3EC', // faint green wash for section backgrounds
        },
        ink: {
          DEFAULT: '#111827', // Charcoal — primary text
          soft: '#374151',
        },
        slate: {
          DEFAULT: '#64748B', // Secondary gray — supporting text, captions
        },
        gold: {
          DEFAULT: '#B8923F', // Subtle gold — used sparingly as an accent
          soft: '#D9C48F',
        },
        paper: '#FFFFFF',
        line: '#E7E9EC', // hairline borders
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // A deliberate, generous type scale for a calm, confident hierarchy
        'display-xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.2' }],
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        // Intentionally soft — a whisper of elevation, never a glow
        subtle: '0 1px 2px rgba(17, 24, 39, 0.04)',
        card: '0 2px 12px rgba(17, 24, 39, 0.06)',
        'card-hover': '0 6px 20px rgba(17, 24, 39, 0.08)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
