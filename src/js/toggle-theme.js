(function() {
    const THEME_DARK = 'dark'
    const THEME_LIGHT = 'light'
    const THEME_LOCAL_STORAGE_ID = 'themeIsDark'

    const toggleThemeCheckbox = document.getElementById('toggle-theme-checkbox')
    let themeIsDark = getTheme()

    function main() {
        restoreTheme()
        bindToggleThemeCheckbox()
    }

    function restoreTheme() {
        if (themeIsDark) {
            document.body.classList.add(THEME_DARK)
            toggleThemeCheckbox.checked = true
        }
    }

    function bindToggleThemeCheckbox() {
        toggleThemeCheckbox.addEventListener('change', toggleTheme)
    }

    function toggleTheme() {
        const classToAdd = themeIsDark ? THEME_LIGHT : THEME_DARK
        const classToRemove = themeIsDark ? THEME_DARK : THEME_LIGHT
        document.body.classList.add(classToAdd)
        document.body.classList.remove(classToRemove)

        themeIsDark = !themeIsDark
        persistTheme(themeIsDark)
    }

    function persistTheme() {
        window.localStorage.setItem(THEME_LOCAL_STORAGE_ID, JSON.stringify(themeIsDark))
    }

    function getTheme() {
        const persistedThemeIsDark = window.localStorage.getItem(THEME_LOCAL_STORAGE_ID)
        return JSON.parse(persistedThemeIsDark)
    }

    main()
})()
