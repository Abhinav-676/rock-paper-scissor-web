
let theme = 0;


const changeTheme = () => {
    if(theme == 0)
    {
        let ThemeButton = document.getElementsByClassName('theme-button')

        ThemeButton[0].classList.remove('dark-theme-shadow')
        ThemeButton[1].classList.remove('dark-theme-shadow')

        ThemeButton[0].firstElementChild.src = "img/Untitledlight.svg";
        ThemeButton[0].classList.add('light-theme-shadow')

        ThemeButton[1].firstElementChild.src = "img/Untitledlight.svg";
        ThemeButton[1].classList.add('light-theme-shadow')
        
        theme = 1
    } else {
        let ThemeButton = document.getElementsByClassName('theme-button')

        ThemeButton[0].classList.remove('light-theme-shadow')
        ThemeButton[1].classList.remove('light-theme-shadow')

        ThemeButton[0].firstElementChild.src = "img/Untitleddark.svg";
        ThemeButton[0].classList.add('dark-theme-shadow')

        ThemeButton[1].firstElementChild.src = "img/Untitleddark.svg";
        ThemeButton[1].classList.add('dark-theme-shadow')
        
        theme = 0
    }

}
