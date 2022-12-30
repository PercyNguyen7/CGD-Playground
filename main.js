// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
import'https://rawcdn.githack.com/flackr/scroll-timeline/3063e156535f3ab1ffc8a4000ffdd3290232c121/dist/scroll-timeline.js';
let menuBtn = document.querySelector('.menu-btn');
let galleryCloseBtn = document.getElementById('gallery-close-btn');
let galleryRightArrow = document.getElementById('gallery-right-arrow');
let galleryLeftArrow = document.getElementById('gallery-left-arrow');
let galleryZoomSect = document.getElementById("gallery-zoom-sect");
let activeImgWrapper = document.getElementsByClassName('active-img-wrapper');
let prevImgWrapper = document.getElementsByClassName('prev-img-wrapper');
let nextImgWrapper = document.getElementsByClassName(' next-img-wrapper');
let currentImg = document.getElementsByClassName('current-img');
let prevImg = document.getElementsByClassName('prev-img');
let nextImg = document.getElementsByClassName('next-img');

let socialsMenu = document.getElementById('socials-menu');
let tabsWrappers = document.getElementsByClassName('tabs-wrappers');
let primaryNav = document.querySelector('.primary-navigation');
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let menuOpen = false;
let slidesWrapper = document.getElementById('slides-wrapper');
let slideIndicators = document.getElementsByClassName('slide-indicators');
let imgWrappers = document.getElementsByClassName('img-wrappers');


galleryCloseBtn.addEventListener('click', () => {
   galleryZoomSect.classList.add('hidden');
   for (let i = 0; i < activeImgWrapper.length; i++){
    activeImgWrapper[i].classList.remove('active-img-wrapper');}
});


menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    primaryNav.classList.add('open');
    tabsWrappers[0].classList.add('slide-in-right-1');
    tabsWrappers[1].classList.add('slide-in-right-2');
    tabsWrappers[2].classList.add('slide-in-right-3');
    tabsWrappers[3].classList.add('slide-in-right-4');
    socialsMenu.children[0].classList.add('slide-in-bottom-700');
    socialsMenu.children[1].classList.add('slide-in-bottom-800');
    socialsMenu.children[2].classList.add('slide-in-bottom-900');
    socialsMenu.children[3].classList.add('slide-in-bottom-1000');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    primaryNav.classList.remove('open');
    tabsWrappers[0].classList.remove('slide-in-right-1');
    tabsWrappers[1].classList.remove('slide-in-right-2');
    tabsWrappers[2].classList.remove('slide-in-right-3');
    tabsWrappers[3].classList.remove('slide-in-right-4');
    socialsMenu.children[0].classList.remove('slide-in-bottom-700');
    socialsMenu.children[1].classList.remove('slide-in-bottom-800');
    socialsMenu.children[2].classList.remove('slide-in-bottom-900');
    socialsMenu.children[3].classList.remove('slide-in-bottom-1000');
    menuOpen = false;
  }
});

leftArrow.addEventListener('click', () => {
   
    if (slidesWrapper.getAttribute("data-slide") == 1){
    slidesWrapper.setAttribute('data-slide',3);
    console.log('3');
    slideIndicators[0].classList.remove('active');
    slideIndicators[2].classList.add('active');
    
    } 
    else if (slidesWrapper.getAttribute("data-slide") == 2){
        slidesWrapper.setAttribute('data-slide',1);
        console.log('1');
        slideIndicators[1].classList.remove('active');
        slideIndicators[0].classList.add('active');
    } 
    else if (slidesWrapper.getAttribute("data-slide") == 3){
        slidesWrapper.setAttribute('data-slide',2);
        console.log('2');
        slideIndicators[2].classList.remove('active');
        slideIndicators[1].classList.add('active');
    } 
});

rightArrow.addEventListener('click', () => {
   
    if (slidesWrapper.getAttribute("data-slide") == 1){
    slidesWrapper.setAttribute('data-slide',2);
    console.log('2');
    // for (let n=0 ; n < slideIndicators.length; n++){
       
    // }
    slideIndicators[0].classList.remove('active');
    slideIndicators[1].classList.add('active');
    } 
    else if (slidesWrapper.getAttribute("data-slide") == 2){
        slidesWrapper.setAttribute('data-slide',3);
        console.log('3');
        slideIndicators[1].classList.remove('active');
        slideIndicators[2].classList.add('active');
    } 
    else if (slidesWrapper.getAttribute("data-slide") == 3){
        slidesWrapper.setAttribute('data-slide',1);
        console.log('1');
        slideIndicators[2].classList.remove('active');
        slideIndicators[0].classList.add('active');
    } 
});

let currentImgCounter = 0;
for (let n = 0; n < imgWrappers.length; n++){
    imgWrappers[n].addEventListener('click', () =>{ 
        galleryZoomSect.classList.remove('hidden');
        resetActiveImgWrapper();
        //curentImgWrapperCounter
        currentImgCounter = n;
        console.log("img #"+ n);
        updateImg();
        img2.src = activeImgWrapper[0].children[0].src;
        // imgWrappers[n].classList.add('active-img-wrapper');
        // galleryZoomSect.children[0].children[0].src = activeImgWrapper[0].children[0].src;
    });
}

galleryRightArrow.addEventListener('click',()=>{
    // if current img is less than 
    if (currentImgCounter < imgWrappers.length -1){
        currentImgCounter++;
    console.log('img#'+currentImgCounter);
    resetActiveImgWrapper();
    updateImg();
    slideRightImg();
    }


});
galleryLeftArrow.addEventListener('click',()=>{
    if (currentImgCounter > 0){
        currentImgCounter--;

    console.log('img#'+currentImgCounter);
    resetActiveImgWrapper();
   updateImg();
   slideLeftImg();
    }
});

function resetActiveImgWrapper(){
    for (let i = 0; i < activeImgWrapper.length; i++){
        activeImgWrapper[i].classList.remove('active-img-wrapper');}
    for (let i = 0; i < prevImgWrapper.length; i++){
        prevImgWrapper[i].classList.remove('prev-img-wrapper');}
    for (let i = 0; i < nextImgWrapper.length; i++){
        nextImgWrapper[i].classList.remove('next-img-wrapper');}    
}
//This is the 

let img1 =galleryZoomSect.children[0].children[0];
let img2 =galleryZoomSect.children[0].children[1];
let img3 =galleryZoomSect.children[0].children[2];
// Update current Active Img on the Gallery Section
function updateImg(){
        imgWrappers[currentImgCounter].classList.add('active-img-wrapper');
        if (currentImgCounter >0){
        imgWrappers[currentImgCounter-1].classList.add('prev-img-wrapper');}
        if (currentImgCounter < imgWrappers.length -1){
        imgWrappers[currentImgCounter+1].classList.add('next-img-wrapper');}
        // img2.src = activeImgWrapper[0].children[0].src;
        // currentImg[0].src = activeImgWrapper[0].children[0].src;
        // prevImg[0].src = prevImgWrapper[0].children[0].src;
        // nextImg[0].src = nextImgWrapper[0].children[0].src;
}
function slideRightImg(){
    // if(nextImgWrapper.length == 1){
        console.log('working');
// if middle is current Img
    if(img2.classList.contains("current-img")){
        img2.classList.remove('current-img','invisible');
        img2.classList.add('prev-img');

        img1.classList.remove('prev-img');
        img1.classList.add('next-img','invisible');

        img3.classList.remove('next-img','invisible');
        img3.classList.add('current-img');

            img3.src =activeImgWrapper[0].children[0].src;
            if(nextImgWrapper.length !=0){
                img1.src =nextImgWrapper[0].children[0].src;
            }
    }
    else if(img3.classList.contains("current-img")){
        img3.classList.remove('current-img','invisible');
        img3.classList.add('prev-img');

        img2.classList.remove('prev-img');
        img2.classList.add('next-img','invisible');

        img1.classList.remove('next-img','invisible');
        img1.classList.add('current-img');
    
            img1.src =activeImgWrapper[0].children[0].src;
            if(nextImgWrapper.length !=0){
                img2.src =nextImgWrapper[0].children[0].src;
            }       
    }
    else if(img1.classList.contains("current-img")){
        img1.classList.remove('current-img','invisible');
        img1.classList.add('prev-img');

        img3.classList.remove('prev-img');
        img3.classList.add('next-img','invisible');

        img2.classList.remove('next-img','invisible');
        img2.classList.add('current-img');
     
            img2.src =activeImgWrapper[0].children[0].src;
            if(nextImgWrapper.length !=0){
                img3.src =nextImgWrapper[0].children[0].src;
            }
    }
// }
    // imgNext.clas
}
const scrollTracker = document.querySelector('.scroll-tracker');

const animatedImage = document.querySelector(".img-rotate");
const animatedImageOffsetTop = animatedImage.offsetTop;
const animatedImageHeight = animatedImage.offsetHeight;

const animatedImageTimeline = new ScrollTimeline({

    // scrollOffsets:[
    //     { target: animatedImage, edge:"start", threshold: '1'},
    //     { target: animatedImage, edge:"end", threshold: '1'}
    // ],
         scrollOffsets:[
         CSS.px(animatedImageOffsetTop + animatedImageHeight - window.innerHeight -200),
        CSS.px(animatedImageOffsetTop + 1000),
    ],
    
});
//scrollbar
const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: 'block',
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
    {   
      transform: ['scaleX(0)', 'scaleX(1)']
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
)

animatedImage.animate(
    {
     transform: ["perspective(1000px) rotateX(0deg) rotateY(0deg)","perspective(1000px) rotateX(25deg) rotateY(0deg)"] ,
    //   opacity:['0','1'] 
    },
    {
        duration:1,
        easing:'linear',
        timeline: animatedImageTimeline,
        // timeline: new ScrollTimeline({
        //     // scrollOffsets:[
        //     //     CSS.px(dsWrapperOffsetTop + dsWrapperHeight - window.innerHeight),
        //     //     CSS.px(dsWrapperOffsetTop),
        //     // ]
          
        //     // scrollOffsets:[
        //     //     { target: dsWrapper, edge:"start", threshold: '1'},
        //     //     { target: dsWrapper, edge:"end", threshold: '1'},
        //     //    ],
        // })
    }
);



function slideLeftImg(){
    console.log(animatedImageOffsetTop,animatedImagerHeight);
    // if middle is current Img
        if(img2.classList.contains("current-img")){
            img2.classList.remove('current-img');
            img2.classList.add('next-img');
    
            img1.classList.remove('prev-img','invisible');
            img1.classList.add('current-img');
    // irrelevant img has invisible
            img3.classList.remove('next-img');
            img3.classList.add('prev-img','invisible');
            
            img1.src =activeImgWrapper[0].children[0].src;
            if(prevImgWrapper.length !=0){
                img3.src =nextImgWrapper[0].children[0].src;
            }   
        }
        else if(img3.classList.contains("current-img")){
            img3.classList.remove('current-img','invisible');
            img3.classList.add('next-img');
    
            img2.classList.remove('prev-img','invisible');
            img2.classList.add('current-img');
    
            img1.classList.remove('next-img');
            img1.classList.add('prev-img','invisible');

            img2.src =activeImgWrapper[0].children[0].src;
            if(prevImgWrapper.length !=0){
                img1.src =nextImgWrapper[0].children[0].src;
            }   
        }
        else if(img1.classList.contains("current-img")){
            img1.classList.remove('current-img','invisible');
            img1.classList.add('next-img');
    
            img3.classList.remove('prev-img','invisible');
            img3.classList.add('current-img');
    
            img2.classList.remove('next-img');
            img2.classList.add('prev-img','invisible');

            img3.src =activeImgWrapper[0].children[0].src;
            if(prevImgWrapper.length !=0){
                img2.src =nextImgWrapper[0].children[0].src;
            }   
        }
        // imgNext.clas
    }


