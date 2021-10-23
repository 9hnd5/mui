import { createTheme } from '@mui/material/styles';
// import { createTheme } from '@mui/system';
import { green, grey, purple, red, yellow } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      default: string;
      waiting: string;
      success: string;
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      default?: string;
      waiting?: string;
      success?: string;
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: purple,
  },
  status: {
    default: grey[200],
    waiting: yellow[200],
    success: green[200],
    danger: red[200],
  },
});
export default theme;
