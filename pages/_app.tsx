import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyles from '../styles/global/global'
import theme from '../styles/theme/theme';

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default function MyApp (
  { Component, pageProps }: AppProps): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
