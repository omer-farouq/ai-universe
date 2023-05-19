/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#1EB854",
                  
          "secondary": "#1FD65F",
                  
          "accent": "#D99330",
                  
          "neutral": "#110E0E",
                  
          "base-100": "#171212",
                  
          "info": "#3ABFF8",
                  
          "success": "#36D399",
                  
          "warning": "#FBBD23",
                  
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

