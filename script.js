const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
let currentSlide = 0;
const maxSlide= slides.length;

const slider = document.querySelector(".slider");


// slider.style.transform= "scale(0.2)";
slider.style.overflow='hidden';
// slider.style.transform= `scale(0.4)`;

// slides.forEach((s,i)=>{
//     s.style.transform = `translateX(${i*100}%)`
// });



const gotToSlide=function(slide)
{

    
    slides.forEach((s,i)=>(s.style.transform=`translateX(${100 * (i-slide)}%)`)
    );
       
};
gotToSlide(0);


//Next slide

const nextSlide= function()
{
    if(currentSlide === maxSlide-1)
    {
        currentSlide=0;
    }
    else
    {
       currentSlide++;
    }
    gotToSlide(currentSlide);
};


const prevSlide=function()
{
    if(currentSlide === 0)
    {
        currentSlide=maxSlide-1;
    }
    else
    {
        currentSlide--;
    }
   
    gotToSlide(currentSlide);
}

btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide);
