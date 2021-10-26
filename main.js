const slides = document.querySelectorAll('.slide');
const sliderBanner = document.querySelector('.slider-banner-container');
const buttons = document.querySelectorAll('.btn');
const continueBtn = document.querySelector('.continue-btn');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const slideTitle = document.querySelectorAll('.slide-title');
const slideName = document.querySelectorAll('.name');
const footerText = document.querySelector('.footer-text');
console.log(main);


//slider
class Slider{
    constructor(slides, {loop, delay}){
        this.slides = slides;
        this.settings = {loop, delay,};
        this.maxIndex = slides.length;
        this.index = 0;
        this.animate = true;
        this.intervalTime();
    }
     showSlide(index){
         slides.forEach(slide =>  slide.style.transform = `translateX(${-slide.clientWidth * index + 17}px)`)
        
     }

     setSlide(number){
        if(number > this.maxIndex-1){
            this.index = 0
        }else if(number < 0){
            this.index = this.maxIndex -1;
        }else{
            this.index = number;
        }
    }
    
    next(){
        this.setSlide(this.index + 1); 
        this.showSlide(this.index); 
    }
    prev(){
        this.setSlide(this.index - 1);  
        this.showSlide(this.index)
    }
   
    intervalTime(){
       this.interval = setInterval(this.next.bind(this), this.settings.delay);
    }
    stopInterval(){
        clearInterval(this.interval);
    }

    hoverSlide(){
        this.animate = !this.animate;
        this.animate ? this.intervalTime() : this.stopInterval();
    }   
}

const slider = new Slider(slides,{
    loop: true,
    delay: 5000,
});
sliderBanner.addEventListener('mouseenter' , slider.hoverSlide.bind(slider));
sliderBanner.addEventListener('mouseleave' , slider.hoverSlide.bind(slider));



const link = {
    'oneBtn': 'https://www.google.com/search?q=1',
    'twoBtn': 'https://www.google.com/search?q=2',
    'threeBtn': 'https://www.google.com/search?q=3',
}

let toggleState = function (item) {
    buttons.forEach(el => {
        el.classList.remove('active');
    });
    item.classList.add('active');
    showPage();
}

function showPage(){
    for(key in link){
        buttons.forEach(btn =>{
            if(btn.classList.contains(key) && btn.classList.contains('active')){
                continueBtn.href = link[key];
            }
        })
    }
};

function getHours(){
    const date = new Date();
    const hours =date.getHours();
    return hours;
}


function blackTheme(){
    const currentTime = getHours();
    if(currentTime > 0 && currentTime < 6 || currentTime > 18 && currentTime < 24){
        main.style.background = 'black';
        footer.style.background = 'black';
        footerText.style.color = '#7D7D80'
        slides.forEach(slide =>{
            slide.style.background = '#262526';
            slide.style.color = '#fff';
            //slideName.style.color = '#fff';
            //slideTitle.style.color = '#fff';
        })
        slideName.forEach(item => item.style.color = '#fff');
        slideTitle.forEach(item => item.style.color = '#fff');
    }
}
blackTheme();