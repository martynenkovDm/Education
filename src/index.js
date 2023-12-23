import React from 'react';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import ReactDOM from 'react-dom/client';

import { theme } from 'styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
