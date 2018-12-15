(function() {
    'use strict'

    const $document = $(document)
    const $menuBtn = $('#menu-btn')
    const $menuDropdown = $('#menu-dropdown')
    const $menuLinks = $menuDropdown.find('.menu-link')
    const initHastag = window.location.hash
    let menuIsActive = false

    function init() {
        bindMenu()
        bindMenuLinks()
        addMenuLinkActive(initHastag)
    }

    function bindMenuLinks() {
        $menuDropdown.on('click', '.menu-link', menuLinkClickHandler)
    }

    function menuLinkClickHandler(event) {
        const targetHashtag = event.target.hash
        toggleDropdown()
        addMenuLinkActive(targetHashtag)
    }

    function bindMenu() {
        $menuBtn.on('click', toggleDropdown)
    }

    function toggleDropdown() {
        $menuBtn.toggleClass('active')
        $menuDropdown.fadeToggle(200)

        if (!menuIsActive) {
            bindDropdownOutsideClick()
        } else {
            unbindDropdownOutsideClick()
        }

        menuIsActive = !menuIsActive
    }

    function bindDropdownOutsideClick() {
        $document.on('click.dropdownToggle', dropdownOutsideClickHanlder)
    }

    function unbindDropdownOutsideClick() {
        $document.off('click.dropdownToggle')
    }

    function dropdownOutsideClickHanlder(event) {
        if (!menuIsActive || $(event.target).closest('.menu').length) {
            return
        }
        toggleDropdown()
    }

    function addMenuLinkActive(hashtag) {
        const $menuLinkToSetActive = $menuLinks
            .filter((index, menuLink) => menuLink.hash === hashtag)
        const $activeMenuLink = $menuDropdown.find('.active')
        $activeMenuLink.removeClass('active')
        $menuLinkToSetActive.addClass('active')
    }

    init()
})()
