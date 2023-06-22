/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'theme-cl-1': '#C39BD3',
        'theme-cl-2': '#C37BE0',
        "offblack" : "#1D1D1D",
        "logoutred" : "#F75757",
        'logoutred-hover' : "#F83F3F",
        "logingreen" : "#2FD040",
        'logingreen-hover' : "#2CDB3E",
      },
    },
  },
  plugins: [],
}
