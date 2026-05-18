/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        av: {
          cream: "#fff2e8",
          ivory: "#fffaf6",
          peach: "#ffd5bf",
          orange: "#FF6C19",
          amber: "#FF6C19",
          red: "#ED0001",
          moss: "#ED0001",
          leaf: "#FF6C19",
          green: "#0D0D0D",
          night: "#0D0D0D",
          ink: "#0D0D0D",
          bark: "#0D0D0D"
        }
      },
      fontFamily: {
        display: ["GT Ultra Clone", "Georgia", "serif"],
        body: ["Schibsted Clone", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 26px 80px rgba(255, 108, 25, .22)",
        green: "0 28px 90px rgba(13, 13, 13, .28)",
        soft: "0 18px 50px rgba(13, 13, 13, .12)"
      },
      borderRadius: {
        card: "8px"
      },
      backgroundImage: {
        "brand-radial": "radial-gradient(circle at 18% 12%, rgba(255,108,25,.2), transparent 28%), radial-gradient(circle at 82% 18%, rgba(237,0,1,.14), transparent 30%), linear-gradient(180deg, #fffaf6 0%, #fff2e8 52%, #ffe1d0 100%)",
        "forest-grad": "linear-gradient(135deg, #0D0D0D 0%, #0D0D0D 58%, #ED0001 100%)"
      }
    }
  },
  plugins: []
};
