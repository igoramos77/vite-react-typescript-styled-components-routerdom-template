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
    primary: '#0b0f19',
  },
  radius: {
    primary: '12px',
    secondary: '6px',
  },
  cards: {
    primary: '#ffffff',
    secondary: '#f3f6ff',
  },
  border: {
    primary: '#e2e5f1',
    secondary: '#f3f6ff',
  },
  background: {
    primary: '#ffffff',
    secondary: '#f3f6ff',
  },
  input: {
    background: '#ffffff',
    border: '#0a322e40',
    borderActive: '#0a322e',
    labelColor: '#0a322e',
  },
  specific: {
    headerBoxShadow: '0 0.275rem 0.75rem -0.0625rem rgb(11 15 25 / 6%), 0 0.125rem 0.4rem -0.0625rem rgb(11 15 25 / 3%)',
  },
}

export default light;