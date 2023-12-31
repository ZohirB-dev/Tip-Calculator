/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    colors:{
      DarkCyan: "hsl(183, 100%, 15%)",
      DarkGrayishCyan: "hsl(186, 14%, 43%)",
      GrayishCyan: "hsl(184, 14%, 56%)",
      LightGrayishCyan: "hsl(185, 41%, 84%)",
      VeryLightGrayishCyan: "hsl(189, 41%, 97%)",
      White: "hsl(0, 0%, 100%)",
      StrongCyan: "hsl(172, 67%, 45%)",
      red:"rgb(252 165 165)"
    },
    fontFamily: {
      spaceMono:['Space Mono', 'Sans-serif'],
    },
    backgroundImage:{
      'Dollar-icon': "url(/images/icon-dollar.svg)"
    }

  },
  plugins: [],
}

