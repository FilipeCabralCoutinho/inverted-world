const theme = document.querySelector('body')

function switchTheme(){
    if (theme.classList == "light-theme") {
        theme.classList.remove("light-theme");
        theme.classList.add("dark-theme");
    } else if (theme.classList == "dark-theme"){
        theme.classList.remove("dark-theme");
        theme.classList.add("light-theme");
    }
}


