import { ThemeProvider } from 'styled-components';
import AntOverwriteStyle from '../AntOverwriteStyle';
import GlobalStyle from '../GlobalStyle';

export const ThemeProviderUI = (props) => (
  <ThemeProvider {...props} theme={{}}>
    <AntOverwriteStyle />
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
