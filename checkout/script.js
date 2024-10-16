let navpop = document.querySelector('.open-nav')
let navClose = document.querySelector('.close-nav')
let nav = document.querySelector('.nav')

navpop.addEventListener('click', () => {
    if (nav.className === 'nav') {
        nav.className += " navget";
    } else {
        nav.className = "nav"
    }
})
navClose.addEventListener('click', () => {
    if (nav.className === 'nav navget') {
        nav.className += "nav";
    } else {
        nav.className = "nav navget"
    }
})
