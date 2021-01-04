import { lightThemeStyles } from './light'
import { darkThemeStyles } from './dark'

function addPageStyle(targetStyles) {
  const style = document.createElement('style')
  style.textContent = minifyCSS(targetStyles)
  document.head.append(style)
}

function minifyCSS(styles = '') {
  return styles.replaceAll(' ', '').replaceAll('\n', '')
}

addPageStyle(`${lightThemeStyles} ${darkThemeStyles}`)

export { addPageStyle }
export { colors } from './colors'
