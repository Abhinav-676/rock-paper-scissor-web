
let theme = 0
const root = document.querySelector(':root')
let themeImage = document.getElementsByClassName('theme-icon')


function renderLightTheme() {
    themeImage[0].src = "img/Untitleddark.svg"
    themeImage[1].src = "img/Untitleddark.svg"
    root.style.setProperty('background-color','#f5f5f5')
    root.style.setProperty('--nav-bg','#EF8354')
    root.style.setProperty('--title_color','#f5f5f5')
    root.style.setProperty('--themeButton-shadow-idle','0px 0px 4px 2px rgba(0, 0, 0, 0.75)')
    root.style.setProperty('--themeButton-shadow-active','0px 0px 3px 1px rgba(0, 0, 0, 0.75)')
    root.style.setProperty('--footer-color','#4F5D75')
}

function renderDarkTheme() {
    themeImage[0].src = "img/Untitledlight.svg"
    themeImage[1].src = "img/Untitledlight.svg"
    root.style.setProperty('background-color','#6C757D')
    root.style.setProperty('--nav-bg','#343A40')
    root.style.setProperty('--title_color','#f5f5f5')
    root.style.setProperty('--themeButton-shadow-idle','0px 0px 4px 2px #fee127be')
    root.style.setProperty('--themeButton-shadow-active','0px 0px 3px 1px #fee127be')
    root.style.setProperty('--footer-color','#343A40')
}

renderLightTheme()

const changeTheme = () => {

    if (theme == 0)
    {
        renderDarkTheme()
        theme = 1

    }else {
        renderLightTheme()
        theme = 0
    }
}

