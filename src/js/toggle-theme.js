(function() {
    const THEME_DARK = 'dark'
    const THEME_LIGHT = 'light'
    const THEME_STORAGE_ID = 'theme'

    const toggleThemeCheckbox = document.getElementById('toggle-theme-checkbox')

    function main() {
        applyInitalTheme()
        bindToggleThemeCheckbox()
    }

    function applyInitalTheme() {
        const persistedTheme = getPersitedTheme()

        if (persistedTheme) {
            applyTheme(persistedTheme)
            return
        }

        const darkThemeIsPrefered = matchMedia('(prefers-color-scheme: dark)').matches

        if (darkThemeIsPrefered) {
            applyTheme(THEME_DARK)
        }
    }

    function applyTheme(theme) {
        const themeIsDark = theme === THEME_DARK
        const classToAdd = themeIsDark ? THEME_DARK : THEME_LIGHT
        const classToRemove = themeIsDark ? THEME_LIGHT : THEME_DARK

        document.body.classList.add(classToAdd)
        document.body.classList.remove(classToRemove)

        toggleThemeCheckbox.checked = themeIsDark
    }

    function toggleTheme() {
        const currentThemeIsDark = document.body.classList.contains(THEME_DARK)

        if (currentThemeIsDark) {
            applyTheme(THEME_LIGHT)
            persistTheme(THEME_LIGHT)
        } else {
            applyTheme(THEME_DARK)
            persistTheme(THEME_DARK)
        }
    }

    function bindToggleThemeCheckbox() {
        toggleThemeCheckbox.addEventListener('change', toggleTheme)
    }

    function persistTheme(theme) {
        window.sessionStorage.setItem(THEME_STORAGE_ID, JSON.stringify(theme))
    }

    function getPersitedTheme() {
        const persistedTheme = window.sessionStorage.getItem(THEME_STORAGE_ID)
        return JSON.parse(persistedTheme)
    }

    main()
})()
