import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: { default: '#222' },
    text: { primary: '#fff' },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 10,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

export default theme
