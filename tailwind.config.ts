module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        whiteColor: 'var(--whiteColor)',
        borderColor: 'var(--borderColor)',
        lightPrimary: 'var(--lightPrimary)',
        lightGray: 'var(--lightGray)',
        gray: 'var(--gray)',
        dark: 'var(--dark)',
        red: 'var(--red)',
        pageBg: 'var(--pageBg)',
        secondary: 'var(--secondary)',
      },
    },
  },
  plugins: [],
};