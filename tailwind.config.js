/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1E7A34',
        'brand-blue': '#1E88C5',
        'brand-yellow': '#F4A81D',
        ink: '#1a1a1a',
        muted: '#555555',
        base: '#DFDFDF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
