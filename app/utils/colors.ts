export const colors = {
  primary: '#Feac02',
  textPrimary: '#Feac02',
  secondary: '#Ff5a5f',
  textSecondary: '#Ff5a5f',
  black: '#000',
  bgBlack: '#000000',
  bgLightBlack: '#252525',
  white: '#fff',
  gray: '#6e6969',
  textGray: '#AEAEAE',
  light: '#f8f4f4',
  danger: '#ff5252',
  success: '#4ecdc4',
  warning: '#ffe66d',
  lightBlack: '#333',
  lightGray: '#f6f6f6',
};
export const colorsOpacity = {
  primary0: (p: number) => `#Feac02${p}`,
  textPrimary0: (p: number) => `#Feac02${p}`,
  secondary0: (p: number) => `#Ff5a5f${p}`,
};
export type Colors = keyof typeof colors;
