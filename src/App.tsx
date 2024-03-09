import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
import { Router } from './routes'
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>

    </ThemeProvider>
  )
}