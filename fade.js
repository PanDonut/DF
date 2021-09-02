window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() { 
        window.location.href = href
    }, 1000)
}