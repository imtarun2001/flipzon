module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          float: 'float 1s infinite ease-in-out alternate',
        },
        keyframes: {
          float: {
            '100%': { transform: 'translateY(20px)' },
          },
        },
      },
    },
    plugins: [],
  }