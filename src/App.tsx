import { BrowserRouter } from 'react-router-dom';
import { StockContextProvider } from './contexts/StockContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
      <StockContextProvider>
        <Router />
      </StockContextProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}
