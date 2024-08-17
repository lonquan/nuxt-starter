import { watch, useColorMode } from '#imports'

const setArcoTheme = (colorMode = 'light') => {
  document.body.setAttribute('arco-theme', colorMode)
}

export const useTheme = _ => {
  const colorMode = useColorMode()
  setArcoTheme(colorMode.value)
  watch(colorMode, newVal => setArcoTheme(newVal.value))
}