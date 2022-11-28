
let theme = 0;


const changeTheme = () => {
    
    const ThemeButton = document.getElementsByClassName('theme-button')

    if(theme == 0)
    {
        ThemeButton[0].firstElementChild.src = "img/Untitledlight.svg";
        ThemeButton[0].classList.replace('dark-theme-shadow', 'light-theme-shadow')

        ThemeButton[1].firstElementChild.src = "img/Untitledlight.svg";
        ThemeButton[1].classList.replace('dark-theme-shadow','light-theme-shadow')
        
        theme = 1

    } else {

        ThemeButton[0].firstElementChild.src = "img/Untitleddark.svg";
        ThemeButton[0].classList.replace('light-theme-shadow', 'dark-theme-shadow')

        ThemeButton[1].firstElementChild.src = "img/Untitleddark.svg";
        ThemeButton[1].classList.replace('light-theme-shadow', 'dark-theme-shadow')

        theme = 0
    }
}

