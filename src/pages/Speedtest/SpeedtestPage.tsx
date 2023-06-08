import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Header from './components/Header';
import Body from './components/Body';
import Debug from '../../debug/Debug';
import { maxWidth } from '../../constant/constants';

const speedtestPageTheme = createTheme({
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

const SpeedtestPage = () => {
  return (
    <ThemeProvider theme={speedtestPageTheme}>
      <CssBaseline />
      <Header />
      <Body />
      {/* <Debug /> */}
    </ThemeProvider>
  );
};

export default SpeedtestPage;
