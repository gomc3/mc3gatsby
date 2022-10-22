module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
    },
  },
  daisyui: {
    styled: true,
    themes: [
      {
        mc3: {
          primary: '#1e3a8a',
          secondary: '#1d4ed8',
          accent: '#eab308',
          neutral: '#191D24',
          'base-100': '#FFFFFF',
          'base-200': '#E9E9E9',
          'base-300': '#CDCDCD',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}
