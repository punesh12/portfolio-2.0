import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { RoutesComponent } from './modules/app/components/routes/Route'
import { GlobalStyle } from './styles/globalStyles'
import { getThemes, Themes } from './styles/theme'

const App: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)
  const currentTheme = { ...getThemes(darkTheme ? Themes.DARK : Themes.LIGHT) }

  return (
    <ThemeProvider theme={currentTheme}>
      {/* <button onClick={() => setDarkTheme((prev) => !prev)}>Switch</button> */}
      <GlobalStyle />
      <RoutesComponent />
    </ThemeProvider>
  )
}

export default App
