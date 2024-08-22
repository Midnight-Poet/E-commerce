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

let right = document.querySelectorAll('.right')
let left = document.querySelectorAll('.left')
let scrollGroup = document.querySelectorAll('.subdivs')

for (let i = 0; i <= right.length; i++) {
    right[i].addEventListener('click', () => {
        scrollGroup[i].scrollBy(300, 0)
    })
    left[i].addEventListener('click', () => {
        scrollGroup[i].scrollBy(-300, 0)
    })
}



