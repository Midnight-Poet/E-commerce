let closeBtn = document.querySelector('.close')
let pop = document.querySelector('.details')
let img = document.querySelector('.img')
let seeMore = document.querySelectorAll('.fa-eye')
let images = document.querySelectorAll('.product-img')
let names = document.querySelector('.product-name')
let productName = document.querySelectorAll('.name')
let details = document.querySelectorAll('.item-details').innerHTML

closeBtn.addEventListener('click', () => {
    pop.style.display = 'none'
})

for (let i = 0; i < seeMore.length; i++){
    seeMore[i].addEventListener('click', () => {
        pop.style.display = 'block'
        img.src = images[i].src
        names.innerHTML = productName[i].innerHTML
    })

}



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








