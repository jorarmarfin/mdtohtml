/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'SoftOrange': 'hsl(35, 77%, 62%)',
      },
    },
  },
  plugins: [
    typography,
  ],
}
