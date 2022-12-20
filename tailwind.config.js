/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'nav' :"#333333",
        "bg":"#333333",
        'button':"#2196F3"
      },
      minWidth:{
        'logo':"8rem"
      },
      maxWidth:{
        'logo':"50rem"
      },
      minHeight:{
        'nav':"102px",
      },
      dropShadow:{
       "btn": '20px 20px 40px 0px #00000040',

      },
      boxShadow:{
        "btn": '20px 20px 40px rgba(0, 0, 0, 0.25)'
      }
    },
    screens:{
      'sm':"600px",
      'md':"900px",
      'lg':"1200px",
    }
  },
  plugins: [],
}