/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        av: {
          cream: "#fff1e5",
          ivory: "#fffaf3",
          peach: "#ffdec4",
          orange: "#f15a24",
          amber: "#ff8a00",
          red: "#d9280b",
          moss: "#72ad17",
          leaf: "#95bf23",
          green: "#24440e",
          night: "#101807",
          ink: "#14210b",
          bark: "#482817"
        }
      },
      fontFamily: {
        display: ["GT Ultra Clone", "Georgia", "serif"],
        body: ["Schibsted Clone", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 26px 80px rgba(241, 90, 36, .2)",
        green: "0 28px 90px rgba(16, 24, 7, .28)",
        soft: "0 18px 50px rgba(19, 14, 9, .12)"
      },
      borderRadius: {
        card: "8px"
      },
      backgroundImage: {
        "brand-radial": "radial-gradient(circle at 18% 12%, rgba(241,90,36,.22), transparent 28%), radial-gradient(circle at 82% 18%, rgba(114,173,23,.22), transparent 30%), linear-gradient(180deg, #fffaf3 0%, #fff1e5 52%, #ffe8d1 100%)",
        "forest-grad": "linear-gradient(135deg, #101807 0%, #24440e 58%, #42130a 100%)"
      }
    }
  },
  plugins: []
};
