/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'countdown': 'countdown linear forwards',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        countdown: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '283' },
        }
      }
    },
  },
  safelist: [
    { pattern: /bg-(blue|purple|green|yellow|red|orange|teal|indigo|cyan|pink|emerald|sky)-(100|200|400|500|600)/ },
    { pattern: /text-(blue|purple|green|yellow|red|orange|teal|indigo|cyan|pink|emerald|sky)-(500|600|700|800)/ },
    { pattern: /border-(blue|purple|green|yellow|red|orange|teal|indigo|cyan|pink|emerald|sky)-(300|400|500)/ },
    { pattern: /from-(blue|purple|green|yellow|red|orange|teal|indigo|cyan|pink|emerald|sky)-(400|500)/ },
    { pattern: /to-(blue|purple|green|yellow|red|orange|teal|indigo|cyan|pink|emerald|sky)-(600|700)/ },
  ],
  plugins: [],
}

