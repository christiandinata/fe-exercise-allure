import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance to replace server side CSS.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;