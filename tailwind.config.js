/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        holographic: {
          cyan: "#00f3ff",
          purple: "#9d00ff",
          blue: "#0066ff",
          pink: "#ff00e5",
          dark: "#0a0a0c",
        },
      },
      backgroundImage: {
        'holographic-gradient': "linear-gradient(45deg, #00f3ff, #9d00ff, #0066ff, #ff00e5)",
        'holographic-glow': "radial-gradient(circle at center, rgba(157, 0, 255, 0.15), transparent 70%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: 0.5, filter: 'brightness(1)' },
          '50%': { opacity: 1, filter: 'brightness(1.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
