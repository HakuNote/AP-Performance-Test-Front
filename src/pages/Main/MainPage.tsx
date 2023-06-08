import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Header from './components/Header';
import Body from './components/Body';

import { maxWidth } from '../../constant/constants';

const mainpageTheme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'NanumSquareRoundB',
    h3: {
      fontSize: '4rem',
      [`@media (max-width:${maxWidth}px)`]: {
        fontSize: '2rem',
      },
    },
    h4: {
      fontSize: '3rem',
      [`@media (max-width:${maxWidth}px)`]: {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '2rem',
      [`@media (max-width:${maxWidth}px)`]: {
        fontSize: '1rem',
      },
    },
  },
});

const MainPage = () => {
  return (
    <ThemeProvider theme={mainpageTheme}>
      <CssBaseline />
      <Header />
      <Body />
    </ThemeProvider>
  );
};

export default MainPage;
