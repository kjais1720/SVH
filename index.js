
const prev = $('.prev')
const next = $('.next')
const main = $(".main-content")
const slides = $('.slide')
const slideJumpBtn = $(".slide-jump-btn div")
const noOfSlides = slides.length



var activeSlideIndex = 0
slides.each((idx,slide) =>{
    if (slide.className.includes('active')){
        activeSlideIndex = idx
    }
})

slideJumpBtn[activeSlideIndex].classList.add('active')

function changeSlide(){
    slides.each((idx, slide)=>{
        if(slide.className.includes("active")){
            slide.classList.remove('active')
            slideJumpBtn[idx].classList.remove('active')
        }

    })
    slides[activeSlideIndex].classList.add('active')
    slideJumpBtn[activeSlideIndex].classList.add('active')

}

prev.click(()=>{
    if (activeSlideIndex === 0 ){
        activeSlideIndex = noOfSlides-1
    } else {
        activeSlideIndex -=1;
    }
    changeSlide()
})

next.click(()=>{
    activeSlideIndex +=1
    activeSlideIndex %= noOfSlides
    changeSlide()
})

slideJumpBtn.each((idx,button)=>{
    button.addEventListener('click',()=>{
        console.log('clicked '+idx)
        activeSlideIndex = idx
        changeSlide()
    })
})

var infiniteSlide
function startCarousel(){
    infiniteSlide = setInterval(()=>{
        activeSlideIndex++
        activeSlideIndex %= noOfSlides
        changeSlide()

    },3000)
}

main.mouseenter(()=>{
    clearInterval(infiniteSlide)
})

main.mouseleave(()=>{
    startCarousel()
})

startCarousel()
