
const changeTheme = () => {
    const mode = document.querySelector('html').getAttribute('data-theme')
    const themeImage = document.getElementsByClassName('theme-icon')

    if (mode == "light")
    {
        themeImage[0].src = "img/Untitledlight.svg"
        themeImage[1].src = "img/Untitledlight.svg"
    
        document.querySelector('html').setAttribute('data-theme', 'dark')

    }else {
        themeImage[0].src = "img/Untitleddark.svg"
        themeImage[1].src = "img/Untitleddark.svg"
    
        document.querySelector('html').setAttribute('data-theme', 'light')
    }
}

