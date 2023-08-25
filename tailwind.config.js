/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './categories/**/*.{html,js,ts,jsx,tsx,mdx}',
    './components/**/*.{html,js,ts,jsx,tsx,mdx}',
    './app/**/*.{html,js,ts,jsx,tsx,mdx}',
    './sections/**/*.{html,js,ts,jsx,tsx,mdx}',
    './utils/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-100':'#c3b0e8',
        'primary-200':'#8761d1',
        'primary-300':'#542e9e',
        'primary-400':'#3f2376',
        'primary-500':'#351d63',
        'primary-600':'#34174f',
        'primary-700':'#20113b',
        'primary-800':'#150c27',
        'primary-900':'#150c27',

        'secondary-100': '#dceec4',
        'secondary-200': '#c4e29c',
        'secondary-300': '#add775',
        'secondary-400': '#a1d161',
        'secondary-500': '#8dc740',
        'secondary-600': '#7cb134',
        'secondary-700': '#6e9e2e',
        'secondary-800': '#527623',
        'secondary-900': '#374f17'
      },
      height: {
        '128': '32rem',
        '160': '40rem',
        '200': '50rem'
      },
      spacing: {
        '128': '32rem'
      },
      borderRadius: {
        '4xl': '4.5rem',
        '5xl': '6rem'
      },
      boxShadow: {
        'center': '0 3px 20px 5px rgba(0, 0, 0, 0.1)',
        'mobile-nav' : '0px 10px 200px 2px rgba(0,0,0, 0.7)',
        'nav': '0 3px 20px 2px rgba(0,0,0, 0.08)'
      },
      backgroundImage: {
        'explorer': "url('/resources/images/true-native-explorer.webp')"
      },
      gridTemplateRows: {
        'pictures': '0.5fr 1fr 1.5fr 1fr'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
      '4xl': '2560px',
    }
  },
}
