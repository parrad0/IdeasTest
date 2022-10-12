import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import React from 'react';
import { GlobalStyles } from '../../styles/globals';
import { theme } from '../../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
