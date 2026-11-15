/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0b0b0b',
        accent: '#B2A096',
        'accent-light': '#d4c8c0',
        'dark-border': '#292929',
        'dark-card': '#151515',
      },
      fontFamily: {
        forum: ['Forum', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

