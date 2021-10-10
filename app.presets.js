module.exports = {
  theme: {
    extend: {
      colors: {
        'app-light': '#d1e8fe',
        'grey-light': '#f4f4f4',
        menu: {
          normal: '#f4f4f4',
          'normal-icon': '#cacaca',
          active: '#ffdd6a',
          'active-icon': '#000',
        },
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
        18: 'repeat(18, minmax(0, 1fr))',
        20: 'repeat(20, minmax(0, 1fr))',
        24: 'repeat(24, minmax(0, 1fr))',
      },
      screens: {
        sm: '360px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '2560px',
        '3xl': '3840px',
      },
    },
  },
  plugins: [],
}
