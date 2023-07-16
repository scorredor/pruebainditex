import { createTheme } from '@mui/material/styles';
import '../shared/styles/general/colors.scss'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0073ff',
    },
    secondary: {
      main: '#8000ff',
    },
    error: {
      main: '#c40000',
    },
  },
});

export default theme;