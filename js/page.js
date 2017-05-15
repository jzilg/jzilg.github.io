(function() {
    'use strict';
    
    var $document = $(document);
    var $menuDropdown = $('#menu-dropdown');
    var $menuBtn = $('#menu-btn');
    var $contents = $('.content');
    var initHastag = $contents.first().attr('id');
    var menuIsActive = false;

    function init() {
        if (window.location.hash == '') {
            window.location.hash = initHastag;
        }
        toggleContent(window.location.hash, 0);
        bindMenu();
        bindMenuLinks();
    }

    function bindMenuLinks() {
        $menuDropdown.on('click', '.menu-link', menuLinkClickHandler);
    }

    function menuLinkClickHandler(event) {
        event.preventDefault();
        var targetHashtag = event.target.hash;
        
        if (targetHashtag !== window.location.hash) {
            window.location.hash = targetHashtag;
            toggleContent(targetHashtag);
            toggleDropdown();
        }
    }

    function toggleContent(hashtag, duration) {
        $contents.fadeOut(duration).promise().done(function() {
            $(hashtag).fadeIn(duration);
        });
    }

    function bindMenu() {
        $menuBtn.on('click', toggleDropdown);
    }

    function toggleDropdown() {
        $menuBtn.toggleClass('active');
        $menuDropdown.toggle();

        if (!menuIsActive) {
            bindDropdownOutsideClick();
        } else {
            unbindDropdownOutsideClick();
        }

        menuIsActive = !menuIsActive ? true : false;
    }

    function bindDropdownOutsideClick() {
        $document.on('click.dropdownToggle', dropdownOutsideClickHanlder);
    }

    function unbindDropdownOutsideClick() {
        $document.off('click.dropdownToggle');
    }

    function dropdownOutsideClickHanlder(event) {
        if (!menuIsActive || $(event.target).closest('.menu').length) return;
        toggleDropdown();
    }

    init();
})();