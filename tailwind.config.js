// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
      },
      margin: {
        '-100': '-25rem', // Custom negative margin value
        '-104': '-26rem',
        '-108': '-27rem',
        '-112': '-28rem',
        '-116': '-29rem',
        '-120': '-30rem',
        '-124': '-31rem',
        '-128': '-32rem',
        '-132': '-33rem',
        '-136': '-34rem',
        '-140': '-35rem',
        '-144': '-36rem',
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(calc(100vh - 4rem))' }, // 4rem is the approximate height of the icon
        },
      },
      animation: {
        swing: 'swing 2s infinite',
        bounce: 'bounce 3s infinite', // 3 seconds for a full bounce cycle
      },
    },
  },
  plugins: [],
};
