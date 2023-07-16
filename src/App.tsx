import './shared/styles/main.scss'
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';
import { CssBaseline } from '@mui/material';
import PodcasterRoutes from './config/routes/podcasterRoutes';
import { Provider } from 'react-redux';
import store from './config/redux/store';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <PodcasterRoutes />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
