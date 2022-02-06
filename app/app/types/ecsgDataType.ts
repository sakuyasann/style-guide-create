export type layerType = 'description' | 'colorPallete' | 'fontfamily' | 'typography' | string

export type fontWeight = 'Thin' | 'Extra-light' | 'Light' | 'Regular' | 'Medium' | 'Semi-bold' | 'Bold' | 'Extra-bold' | 'Black'

type commonType = {
  isHide?: boolean
  isLock?: boolean
  order: string[]
}

// 
// Project Settings
// 

export type projectType = {
  name: string
  order: layerType[]
}

// 
// Color Pallete
// 

export type colorPalletType = {
  colors: colorsType[]
} & commonType

export type colorsType = {
  id: string
  title: string
  comment: string
  theme: 'single' | 'multiple'
  order: string[]
  data: colorData[]
}

export type colorData = {
  id: string
  title: string
  darkColor: string
  lightColor: string
  comment: string
}

// 
// Font Family
// 

export type fontfamilyType = {
  data: {
    id: string
    family: string
    weight: fontWeight[]
  }[]
  css: string[]
} & commonType

// 
// Typography
// 

export type typographyType = {
  data: {
    id: string
    title: string
    type: 'heading' | 'text' | 'code'
    weight: fontWeight
    size: number
    unit:  'px' | 'pt' | 'rem' | 'em'
  }[]
} & commonType

// 
// Other
// 

export type otherType = {
  title: string
  data: {
    id: string
    img: string
  }[]
} & commonType

export type projectDataType = {
  project: projectType
  data: {
    colorPallet: colorPalletType
    fontfamily: fontfamilyType
    typography: typographyType
    others: otherType[]
  }
}