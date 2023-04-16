import { createContext, useContext } from 'react'
import { Themes } from '../styles/theme'

// Define initial state and action types
export const initialState = { theme: Themes.LIGHT }
const TOGGLE_THEME = 'TOGGLE_THEME'

// Define reducer function
export const reducer = (state: { theme: number }, action: { type: string }) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT,
      }
    default:
      return state
  }
}

export const ThemeContext = createContext(initialState)
export const useTheme = () => useContext(ThemeContext)
