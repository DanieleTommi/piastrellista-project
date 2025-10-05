/*********************************************
 * Tailwind Config - Piastrellista Landing   *
 *********************************************/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F9FF',
          100: '#E6F4FB',
          200: '#B3DCF3',
            300: '#84C6EA',
          400: '#55B4EE',
          500: '#42A3E5',
          600: '#0D8AD6',
          700: '#0079C2',
          800: '#0062A0',
          900: '#004D80'
        }
      },
      boxShadow: {
        'brand-focus': '0 0 0 3px rgba(0,121,194,0.35)'
      }
    }
  },
  plugins: []
};
