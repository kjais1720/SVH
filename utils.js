const nav = $(".nav")
const navToggle = $('#nav-icon')
navToggle.click(()=>{
    navToggle.toggleClass('open')
    nav.toggleClass("active")
})

var prevScrollPos = window.pageYOffset;


window.onscroll = ()=>{

    navToggle.removeClass('open')
    nav.removeClass("active")

    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos){
        nav.css("top",'2vw')
    } else {
        nav.css('top','-200px')
    }
    prevScrollPos = currentScrollPos
}
const shoppingCart = $('#shopping-cart')

// shoppingCart.mouseenter(()=>{
//     shoppingCart.attr('src','images/icons8-shopping-cart.gif')
// })

// shoppingCart.mouseleave(()=>{
//     shoppingCart.attr('src','https://img.icons8.com/material-outlined/24/000000/shopping-cart--v2.png')
// })

const searchButton = $('#search-btn')
const searchBar = $('.search-bar input')
searchButton.click(()=>{
    searchBar.toggleClass('active')
})


const labels=document.querySelectorAll(".form-control label")

labels.forEach(label =>{
    label.innerHTML = label.innerText
            .split('')
            .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms;">${letter}</span>`)
            .join('');
    })