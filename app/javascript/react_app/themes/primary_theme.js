import { generateMedia } from "styled-media-query";
const primaryTheme = {
  colors: {
    main: "#157ffb",
    active: "#1480FB",
    bgPrimary: 'white',
    bgSecondary: '#F4F4F4',
    bgTertiary: '#C4C4C4',
    activeSecondary: '#A4A4A4',
    body: 'black',
    opposite: 'white'
  },
  spacing: {
    navbarHeight: '60px',
    leftBar: '30',
    none: '0 !important',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem'
  },
  borders: {
    bottom: 'border-bottom: rgba(0,0,0,0.075) 1px solid',
    right: 'border-right: rgba(0,0,0,0.1) 1px solid'
  },
  media: generateMedia({
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  }),
  transitions: {
      background: 'transition color 500ms ease-out'
  }
};

export default primaryTheme;
