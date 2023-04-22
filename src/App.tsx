import { useMemo, useReducer } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext, initialState, reducer } from './logic/context'
import { RoutesComponent } from './modules/app/components/routes/Route'
import { GlobalStyle } from './styles/globalStyles'
import { getThemes } from './styles/theme'

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const currentTheme = useMemo(
    () => ({ ...getThemes(state.theme) }),
    [state.theme]
  )

  const value = useMemo(() => ({ state, dispatch }), [state])

  return (
    //@ts-ignore
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <RoutesComponent />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
