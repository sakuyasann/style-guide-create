export type styleguideType = {
  colorPalette: colorPalleteType
}

export type colorPalleteType = {
  slug: string
  colors: colorType[]
}

export type colorType = {
  slug: string
  light: string
  dark: string
}