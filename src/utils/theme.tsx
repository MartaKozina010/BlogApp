import { createGlobalStyle } from "styled-components"

export type ThemeType = {
  background: string
  paragraph: string
  readMore: string
  subtitle: string
  faqLabelLighter: string
  faqLabelDarker: string
  faqDescription: string
  searchListHover: string
}

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
body {
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.paragraph};
  transition: all 0.50s linear;
}
`

export const colors = {
  lightGrey: "#BBBBCB",
  hotPink: "#ff69b4",
  darkGrey: "#f4f6fc33",
  darkBlue: "#1C1E53",
  sunnyYellow: "#FCD980",
  sunnyYellowOpacity: "#fcd9807a",
  paragraphWhite: "#F4F6FC",
  white: "#ffffff",
  royalBlue: "#2405F2",
  almostBlack: "#282938",
  theDarkestBlue: "#181820",
  bloody: "#b90000",
}

export const lightTheme: ThemeType = {
  background: colors.white,
  paragraph: colors.darkBlue,
  readMore: colors.royalBlue,
  subtitle: colors.almostBlack,
  faqLabelLighter: colors.sunnyYellow,
  faqLabelDarker: colors.sunnyYellowOpacity,
  faqDescription: colors.paragraphWhite,
  searchListHover: colors.sunnyYellow,
}

export const darkTheme: ThemeType = {
  background: colors.theDarkestBlue,
  paragraph: colors.white,
  readMore: colors.bloody,
  subtitle: colors.darkGrey,
  faqLabelLighter: colors.darkGrey,
  faqLabelDarker: colors.almostBlack,
  faqDescription: colors.darkGrey,
  searchListHover: colors.almostBlack,
}
