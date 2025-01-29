/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}","./node_modules/flowbite/**/*.js"],

  theme: {
extend: {
  animation: {
      "shake-lr": "shake-lr 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
      "scale-in-top": "scale-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      "scale-in-center": "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
  },
  keyframes: {
      "shake-lr": {
          "0%,to": {
              transform: "rotate(0deg)",
              "transform-origin": "50% 50%"
          },
          "10%,90%": {
              transform: "rotate(8deg)"
          },
          "20%,40%,60%": {
              transform: "rotate(-10deg)"
          },
          "30%,50%,70%": {
              transform: "rotate(10deg)"
          },
          "80%": {
              transform: "rotate(-8deg)"
          }
      },
      "scale-in-top": {
          "0%": {
              transform: "scale(0)",
              "transform-origin": "50% 0%",
              opacity: "1"
          },
          to: {
              transform: "scale(1)",
              "transform-origin": "50% 0%",
              opacity: "1"
          }
      },
      "scale-in-center": {
                    "0%": {
                        transform: "scale(0)",
                        opacity: "1"
                    },
                    to: {
                        transform: "scale(1)",
                        opacity: "1"
                    }
                }
  }
},
  },
  plugins: [
    require('flowbite/plugin')
]

};
