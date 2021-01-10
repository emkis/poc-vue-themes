export const ButtonThemes = Object.freeze({
  default: 'default',
  primary: 'primary',
})

export function isThemeValid(targetTheme) {
  return Object.values(ButtonThemes).includes(targetTheme)
}
