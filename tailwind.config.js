module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'show': {
          '0%' : { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'width': {
          '0%' : { width: '0' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        'show': 'show 0.5s linear',
        'width': 'width 0.3s linear'
      }
    },
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '439px' },
    },
  },
  plugins: [],
};
