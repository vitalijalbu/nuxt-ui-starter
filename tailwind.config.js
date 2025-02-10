module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|info|error|warning|success|neutral|secondary|white)/,
    },
  ],
};
