module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    fontFamily :{
      "smooch": ["Smooch", "cursive"],
      "poppins": ["Poppins", "sans-serif"]
    }
  },
  plugins: [],
}
