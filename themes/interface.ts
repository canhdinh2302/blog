export interface textNormalColors {
  light: string
  main: string
  dark: string
}

export interface textReversedColors {
  light: string
  main: string
  dark: string
}

declare module '@mui/material/styles' {
  export interface Palette {
    textNormal: textNormalColors
    textReversed: textReversedColors
  }
}

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    textNormal: textNormalColors
    textReversed: textReversedColors
  }
}
