var sliderContainer = document.querySelector('main')
var slideRight = document.querySelector('.right-slide')
var slideLeft = document.querySelector('.left-slide')
var upButton = document.querySelector('.up-button')
var downButton = document.querySelector('.down-button')
var slidesLength = slideRight.querySelectorAll('li').length
var activeSlideIndex = 0
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
upButton.addEventListener('click', function () { changeSlide('up') })
downButton.addEventListener('click', function () { changeSlide('down') })
var changeSlide = function (direction) {
    var sliderHeight = sliderContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}




















