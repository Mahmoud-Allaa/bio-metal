/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main_light: '#D2DCEB',
        // Keep the default Tailwind colors and add old money specific colors directly
        'old-money': {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dc',
          300: '#d8d1c4',
          400: '#c4b8a4',
          500: '#b09d82',
          600: '#9c8660',
          700: '#8a7348',
          800: '#755f3a',
          900: '#5d4a2e',
        },
      },
      fontFamily: {
        'heading': ['Playfair Display', 'Times New Roman', 'serif'],
        'body': ['Crimson Text', 'Georgia', 'serif'],
        'accent': ['Cinzel', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      },
      lineHeight: {
        'relaxed': '1.7',
        'loose': '1.8',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)', 
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'elegant': '0 10px 30px -5px rgba(44, 24, 16, 0.1), 0 4px 10px -2px rgba(44, 24, 16, 0.05)',
        'elegant-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 4px 10px -2px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-scale': 'fade-in-scale 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-left': 'fade-in-left 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-right': 'fade-in-right 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'elegant-bounce': 'elegant-bounce 2s infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-scale': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

