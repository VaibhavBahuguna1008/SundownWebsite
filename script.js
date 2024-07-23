const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth:true
})
var elem = document.querySelector(".elem-container")
var img = document.querySelector("#fixedimg")
elem.addEventListener("mouseenter", function(){
    img.style.display = "block";
})
elem.addEventListener("mouseleave", function(){
    img.style.display = "none";
})
img.addEventListener("mouseenter", function(){
    img.style.display = "block";
})
img.addEventListener("mouseleave", function(){
    img.style.display = "none";
})


var elems = document.querySelectorAll(".elem")
elems.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        var image = val.getAttribute("data-image")
        img.style.backgroundImage = `url(${image})`
    })
})

const t1 = gsap.timeline(); 
const texts = document.querySelectorAll(".text");

texts.forEach((text, index) => {
    t1.to(text, { opacity: 1, duration: 0.15 }) // Fade in
    .to(text, { opacity: 0, duration: 0.15 }, "+=1"); //Fade Out
})
t1.to("#loader", {
    top: "-100%",
    duration: 0.8
}) 
t1.to("#loader",{
    opacity: 0  
})

t1.to("#loader",{
    display : "none"
})

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swiperAnimation()
var menu = document.querySelector('.full-scr')
var nav = document.querySelector('#nav h3')
nav.addEventListener("click", function(){
    menu.style.display = "block";
    gsap.to('.full-scr', {
        top: '-50%',
        duration : 1
    })
})
var menuup = document.querySelector('.full-scr i')
menuup.addEventListener("click", function(){
    gsap.to('.full-scr', {
        top: '-100%',
        duration : 1
    })
})
