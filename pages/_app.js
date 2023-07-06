import "../Theme/global.css"
import {GlobalStyle, defaultTheme} from "../Theme/GlobalStyle";
import {ThemeProvider} from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
