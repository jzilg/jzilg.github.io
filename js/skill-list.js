(function() {
    const skills = [
        {
            filename: 'html',
            title: 'HTML',
            url: 'https://www.w3.org/html/',
        },
        {
            filename: 'css',
            title: 'CSS',
            url: 'https://www.w3.org/Style/CSS/',
        },
        {
            filename: 'sass',
            title: 'Sass',
            url: 'https://sass-lang.com/',
        },
        {
            filename: 'less',
            title: 'Less',
            url: 'http://lesscss.org/',
        },
        {
            filename: 'js',
            title: 'JavaScript',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            filename: 'ts',
            title: 'TypeScript',
            url: 'https://www.typescriptlang.org/',
        },
        {
            filename: 'nodejs',
            title: 'Node.js',
            url: 'https://nodejs.org/',
        },
        {
            filename: 'react',
            title: 'React',
            url: 'https://reactjs.org/',

        },
        {
            filename: 'redux',
            title: 'Redux',
            url: 'https://redux.js.org/',
        },
        {
            filename: 'vue',
            title: 'Vue.js',
            url: 'https://vuejs.org/',
        },
        {
            filename: 'd3',
            title: 'D3.js',
            url: 'https://d3js.org/',
        },
        {
            filename: 'jquery',
            title: 'jQuery',
            url: 'https://jquery.com/',
        },
        {
            filename: 'jest',
            title: 'Jest',
            url: 'https://jestjs.io/',
        },
        {
            filename: 'eslint',
            title: 'Eslint',
            url: 'https://eslint.org/',
        },
        {
            filename: 'stylelint',
            title: 'Stylelint',
            url: 'https://stylelint.io/',
        },
        {
            filename: 'webpack',
            title: 'webpack',
            url: 'https://webpack.js.org/',
        },
        {
            filename: 'gulp',
            title: 'Gulp.js',
            url: 'https://gulpjs.com/',
        },
        {
            filename: 'babel',
            title: 'Babel',
            url: 'https://babeljs.io/',
        },
        {
            filename: 'svg',
            title: 'SVG',
            url: 'https://www.w3.org/Graphics/SVG/',
        },
        {
            filename: 'json',
            title: 'JSON',
            url: 'https://json.org/',
        },
        {
            filename: 'json-schema',
            title: 'JSON Schema',
            url: 'https://json-schema.org/',
        },
        {
            filename: 'bash',
            title: 'Bash shell',
            url: 'https://www.gnu.org/software/bash/',
        },
        {
            filename: 'git',
            title: 'git',
            url: 'https://git-scm.com/',
        },
        {
            filename: 'jetbrains',
            title: 'JetBrains IDE',
            url: 'https://www.jetbrains.com/',
        },
    ]

    const skillList = document.getElementById('skill-list')

    function createListItem() {
        const li = document.createElement('li')
        return li
    }

    function createAnchor(url, title) {
        const anchor = document.createElement('a')
        anchor.classList.add('skill-list-anchor')
        anchor.href = url
        anchor.title = title
        anchor.setAttribute('target', '_blank')
        return anchor
    }

    function createImg(filename, title) {
        const img = document.createElement('img')
        img.classList.add('skill-list-logo')
        img.src = `./images/logos/${filename}.svg`
        img.alt = title
        img.width = 100
        return img
    }

    skills.forEach(({ filename, title, url }) => {
        const li = createListItem()
        const anchor = createAnchor(url, title)
        const img = createImg(filename, title)

        anchor.appendChild(img)
        li.appendChild(anchor)
        skillList.appendChild(li)
    })
})()
