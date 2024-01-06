const sliderLine = document.querySelector(".slider-line")
const sliderPrev = document.querySelector(".slider-prev")
const sliderNext = document.querySelector(".slider-next")
let start = 0

console.log(sliderNext)
sliderPrev.addEventListener("click", function(){
    start = start - 1200;
    if (start < 0) {
        start = 0;
    }

    sliderLine.style.left = -start + "px";
})

sliderNext.addEventListener("click", function(){
  start = start + 1200;
  if(start > 4800){
  start = 0}

    sliderLine.style.left = -start + "px";
    
})

sliderLine.style.left = start + "px";
    
/*const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slider-line");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext =  document.querySelector(".slider-next");
 
const sliderImg = document.querySelector(".slider-img");

let count = 0;
let width;

function init(){
    width = slider.offsetWidth;
    console.log("width", width);
    sliderLine.style.width = width * sliderImg.length + "px";
    for(let i=0; i < sliderImg.length; i +=1){
        sliderImg[i].style.width = width + "px";
        sliderImg[i].style.height = "auto";
    }

    rollSlider();
}
window.addEventListener("resize", init);
init()                                                                        

//Next
sliderNext.addEventListener("click", function() {
    count++;
    if (count >= sliderImg.length){
        count = 0;
    }

    console.log("count", count);
    rollSlider();
})

//prev
sliderPrev.addEventListener("click", function(){
    count--
    if (count < sliderImg.length){
        count = sliderImg.length - 1;
    }

    console.log("count", count);
   rollSlider();
} )

function rollSlider(){
    sliderLine.style.left = -count*width + "px"
}*/