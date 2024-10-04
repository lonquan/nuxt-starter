export default defineNuxtPlugin((nuxtApp) => {
  const schemes = ['light', 'dark', 'auto']
  const storageKey = 'app-theme-scheme'
  const storageValue = window.localStorage.getItem(storageKey)
  const isDark = ref(storageValue === 'dark')
  const isSupportFollow = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme)').matches)
  let darkModeQuery = null

  const listenerHandler = e => isDark.value = e.matches
  const startListeningSystemScheme = () => {
    if (darkModeQuery) {
      darkModeQuery.removeListener(listenerHandler)
      darkModeQuery = null
    }

    darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    isDark.value = darkModeQuery.matches
    darkModeQuery.addListener(listenerHandler)
    setLocalStorage('auto')

  }
  const setLocalStorage = value => {
    if (schemes.includes(value)) {
      localStorage.setItem(storageKey, value)
    }
  }
  const addColorScheme = () => {
    document.documentElement.classList.add('dark')
    document.body.setAttribute('arco-theme', 'dark')
  }
  const removeColorScheme = () => {
    document.documentElement.classList.remove('dark')
    document.body.removeAttribute('arco-theme')
  }
  const toggleDark = (follow = false) => {
    if (follow && isSupportFollow.value) {
      return startListeningSystemScheme()
    }

    isDark.value = !isDark.value
    setLocalStorage(isDark.value ? 'dark' : 'light')
  }

  // 监听系统色调
  if ((!storageValue || storageValue === 'auto') && isSupportFollow.value) {
    startListeningSystemScheme()
  }

  watchEffect(() => {
    isDark.value ? addColorScheme() : removeColorScheme()
  })

  return {
    provide: {
      darkMode: {
        isDark, isSupportFollow, toggleDark
      },
    },
  }
})