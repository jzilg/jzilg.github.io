(function() {
    const toggleThemeCheckbox = document.getElementById('toggle-theme-checkbox')
    let themeIsDark = getTheme()

    function main() {
        restoreTheme()
        bindToggleThemeCheckbox()
    }

    function restoreTheme() {
        if (themeIsDark) {
            document.body.classList.add('dark')
            toggleThemeCheckbox.checked = true
        }
    }

    function bindToggleThemeCheckbox() {
        toggleThemeCheckbox.addEventListener('change', toggleTheme)
    }

    function toggleTheme() {
        const classToAdd = themeIsDark ? 'light' : 'dark'
        const classToRemove = themeIsDark ? 'dark' : 'light'
        document.body.classList.add(classToAdd)
        document.body.classList.remove(classToRemove)

        themeIsDark = !themeIsDark
        persistTheme(themeIsDark)
    }

    function persistTheme() {
        window.localStorage.setItem('themeIsDark', JSON.stringify(themeIsDark))
    }

    function getTheme() {
        const persistedThemeIsDark = window.localStorage.getItem('themeIsDark')
        return JSON.parse(persistedThemeIsDark)
    }

    main()
})()
