import { IThemeProps } from "./IThemeProps";

const light: IThemeProps = {
  colors: {
    primary: '#6366f1',
    secondary: '#eff2fc',
    tertiary: '#6e61c6',
    success: '#22c55e',
    danger: '#ef4444',
    warning: '#ffba08',
    info: '#4c82f7',
    light: '#ffffff',
    dark: '#0b0f19',
    muted: '#8f91ac',
  },
  text: {
    primary: '#ffffff',
  },
  radius: {
    primary: '12px',
    secondary: '6px',
  },
  cards: {
    primary: '#0b0f19',
    secondary: '#151822',
  },
  border: {
    primary: '#ffffff24',
    secondary: '#d4d7e5',
  },
  background: {
    primary: '#0b0f19',
    secondary: '#10141e',
  },
  input: {
    background: '#ffffff',
    border: '#0a322e40',
    borderActive: '#0a322e',
    labelColor: '#0a322e',
  },
  specific: {
    headerBoxShadow: '',
  },
}

export default light;