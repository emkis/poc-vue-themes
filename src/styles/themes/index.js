import { lightThemeStyles } from './light'
import { darkThemeStyles } from './dark'

function addPageStyle(targetStyles) {
  const style = document.createElement('style')

  style.textContent = targetStyles.replaceAll(' ', '').replaceAll('\n', '')
  document.head.append(style)
}

addPageStyle(`${lightThemeStyles} ${darkThemeStyles}`)

export { addPageStyle }
export { colors } from './colors'
