module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        DEFAULT: "1069px",
        sm: '600px',
        md: '728px',
        lg: '984px',
      },
    },
    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      30: "30px",
      36: "36px",
      48: "48px",
      64: "64px",
    },
    spacing: {
      0: "0px",
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      "section": "200px"
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/images/hero/movi-hero.png')",
        'payment-pattern': "url('./assets/images/paymentInfo/payment-info.png')",

      }
    },
    colors: {
      transparent: 'transparent',
      green: '#88E0B0',
      white: '#fff',
      black: '#0E1D49',
      gray: "#696871",
      "gray-light": "#C4C4C4",
      "blue-dark": "#0E1D49",
      "black-shadow": "rgba(0,0,0, .3)"
    },
  },
  plugins: [],
};
