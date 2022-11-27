const root = document.querySelector(':root');
const main = document.querySelector('main');
const rootStyles = getComputedStyle(root);
const navHeight = rootStyles.getPropertyValue('--nav_height');

let viewportHeight = window.innerHeight;

let mainHeight = viewportHeight - Number.parseInt(navHeight);

main.style.setProperty('height',`${mainHeight}px`)

window.onresize = function(){

    viewportHeight = window.innerHeight;
    mainHeight = viewportHeight - navHeight;
    main.style.setProperty('height',`${mainHeight}px`)
}
