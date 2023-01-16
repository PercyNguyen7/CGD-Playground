// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
import'https://rawcdn.githack.com/flackr/scroll-timeline/3063e156535f3ab1ffc8a4000ffdd3290232c121/dist/scroll-timeline.js';
const menuBtn = document.querySelector('.menu-btn');
const galleryCloseBtn = document.getElementById('gallery-close-btn');
const galleryRightArrow = document.getElementById('gallery-right-arrow');
const galleryLeftArrow = document.getElementById('gallery-left-arrow');
const galleryZoomSect = document.getElementById("gallery-zoom-sect");
const activeImgWrapper = document.getElementsByClassName('active-img-wrapper');
const prevImgWrapper = document.getElementsByClassName('prev-img-wrapper');
const nextImgWrapper = document.getElementsByClassName(' next-img-wrapper');
const currentImg = document.getElementsByClassName('current-img');
const prevImg = document.getElementsByClassName('prev-img');
const nextImg = document.getElementsByClassName('next-img');

const socialsMenu = document.getElementById('socials-menu');
const tabsWrappers = document.getElementsByClassName('tabs-wrappers');
const primaryNav = document.querySelector('.primary-navigation');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const dsScreen2 = document.querySelector('.screen-2')
let menuOpen = false;
const slidesWrapper = document.getElementById('slides-wrapper');
const slideIndicators = document.getElementsByClassName('slide-indicators');
const imgWrappers = document.getElementsByClassName('img-wrappers');



// For Mobile
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    primaryNav.setAttribute('data-open',true);
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
    primaryNav.setAttribute('data-open',false);
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
let currentSlide = 0;
leftArrow.addEventListener('click', () => {
    if (currentSlide >0 ){
        currentSlide--;
    }
    else if (currentSlide == 0){
        currentSlide = slidesWrapper.children.length -1;
    }
    console.log("current slide is"+currentSlide);
    // change attribute of slide indicator button to the current slide
    slidesWrapper.setAttribute('data-slide',currentSlide);
    for (let i = 0; i < slidesWrapper.children.length; i++){
        // reset slide indicators
        slideIndicators[i].setAttribute('data-slide','inactive');;
    }
    slideIndicators[currentSlide].setAttribute('data-slide','active');
    updateSlideInfo()
;});

// SWITCH BETWEEN THE THREE IMG COMPONENT
rightArrow.addEventListener('click', () => {
    if (currentSlide < slidesWrapper.children.length-1){
        currentSlide++;
    }
    else if (currentSlide == slidesWrapper.children.length -1){
        currentSlide = 0;
    }
    console.log("current slide is"+currentSlide);
    // change attribute of slide indicator button to the current slide
    slidesWrapper.setAttribute('data-slide',currentSlide);
    for (let i = 0; i < slidesWrapper.children.length; i++){
        // reset slide indicators
        slideIndicators[i].setAttribute('data-slide','inactive');;
    }
    slideIndicators[currentSlide].setAttribute('data-slide','active');
    updateSlideInfo();
//     if (slidesWrapper.getAttribute("data-slide") == 1){
    
//     slidesWrapper.setAttribute('data-slide',2);
//     console.log('2');
//     // for (let n=0 ; n < slideIndicators.length; n++){
       
//     // }
//     slideIndicators[0].classList.remove('active');
//     slideIndicators[1].classList.add('active');
//     // dsScreen2.setAttribute('data-color',2);
//     } 
//     else if (slidesWrapper.getAttribute("data-slide") == 2){
//         slidesWrapper.setAttribute('data-slide',3);
//         console.log('3');
//         slideIndicators[1].classList.remove('active');
//         slideIndicators[2].classList.add('active');
//         // dsScreen2.setAttribute('data-color',3);
//     } 
//     else if (slidesWrapper.getAttribute("data-slide") == 3){
//         slidesWrapper.setAttribute('data-slide',1);
//         console.log('1');
//         slideIndicators[2].classList.remove('active');
//         slideIndicators[0].classList.add('active');
//         // dsScreen2.setAttribute('data-color',1);
//     } 
});

const eventTitle = document.querySelector('#event-title');
const eventDescription = document.querySelector('#event-description');

function updateSlideInfo(){
    if (currentSlide ==0){
        eventTitle.innerHTML='Start of Semester Meetup';
        eventDescription.innerHTML='More Details coming soon';
    }
    else if (currentSlide ==1){
        eventTitle.innerHTML='Weekly Meetups';
        eventDescription.innerHTML='More Details coming soon';
    }
    else if (currentSlide ==2){
        eventTitle.innerHTML='TBD';
        eventDescription.innerHTML='More Details coming soon';
    }
    else if (currentSlide ==3){
        eventTitle.innerHTML='TBD';
        eventDescription.innerHTML='More Details coming soon';
    }
}

let currentImgCounter = 0;

for (let n = 0; n < imgWrappers.length; n++){
    imgWrappers[n].addEventListener('click', () =>{ 
        galleryZoomSect.classList.remove('hidden');
        resetActiveImgWrapper();
        //curentImgWrapperCounter
        currentImgCounter = n;
        console.log("img #"+ n);
        updateImg();
        img1.src = activeImgWrapper[0].children[0].src;
        img2.src = activeImgWrapper[0].children[0].src;
        img3.src = activeImgWrapper[0].children[0].src;
        // imgWrappers[n].classList.add('active-img-wrapper');
        // galleryZoomSect.children[0].children[0].src = activeImgWrapper[0].children[0].src;
    });
}
galleryCloseBtn.addEventListener('click', () => {
    galleryZoomSect.classList.add('hidden');
    // for (let i = 0; i < activeImgWrapper.length; i++){
    //  activeImgWrapper[i].classList.remove('active-img-wrapper');}
    updateImg();
 });
 
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

            img3.src = activeImgWrapper[0].children[0].src;
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
const skyBG = document.querySelector('#sky-bg');
const dsRotate = document.querySelector(".ds-3d-rotate");
const animatedHeadings = document.querySelectorAll(".slide-lr-scroll");
const dsRotateOffsetTop = dsRotate.offsetTop;
const dsRotateHeight = dsRotate.offsetHeight;

animatedHeadings.forEach((heading)=>{
    const headingOffsetTop = heading.offsetTop;
    const headingOffsetHeight = heading.offsetHeight;
    heading.animate(
        {   
          transform: ['translateX(40px)', 'translateX(0px)'], 
        //   color:['hsl(var(--clr-white))','hsl(var(--clr-pink))']
          opacity: ['0.3','1']
        },
        {
            duration: 1,
            easing: 'linear',
            timeline: new ScrollTimeline({
                scrollOffsets:[
                            CSS.px(headingOffsetTop + headingOffsetHeight - window.innerHeight -200),
                            CSS.px(headingOffsetTop -550),
                        ],
            }),
        }
    );
});


// const dsRotateTimeline = new ScrollTimeline({

//     // scrollOffsets:[
//     //     { target: dsRotate, edge:"start", threshold: '1'},
//     //     { target: dsRotate, edge:"end", threshold: '1'}
//     // ],
//          scrollOffsets:[
//          CSS.px(dsRotateOffsetTop + dsRotateHeight - window.innerHeight -200),
//         CSS.px(dsRotateOffsetTop + 1000),
//     ],
    
// });
//scrollbar
// const scrollTrackingTimeline = new ScrollTimeline({
//     source: document.scrollingElement,
//     orientation: 'block',
//     scrollOffsets: [CSS.percent(0), CSS.percent(100)],
// });

scrollTracker.animate(
    {   
      transform: ['scaleX(0)', 'scaleX(1)']
    },
    {
        duration: 1,
        timeline: new ScrollTimeline({
            scrollOffsets: [CSS.percent(0), CSS.percent(100)],
        }),
    }
)
skyBG.animate(
    {   
      transform: ['translate(0%,0%)', 'translate(10%,10%)'],
      opacity: ['1','0.6']
    },
    {
        duration: 1,
        timeline: new ScrollTimeline({
            scrollOffsets: [CSS.percent(0), CSS.percent(105)],
        }),
    }
)
const mediaQuery = window.matchMedia('(min-width: 45em)')
// Check if the media query is true
if (mediaQuery.matches) {
    console.log('min 45em');
  // Then trigger an alert
  dsRotate.animate(
    {
     transform: ["perspective(1000px) rotateX(-40deg) rotateY(10deg) translateY(-225px) scale(0.4)","perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)"] ,
    //   opacity:['0.4','1'] 
    },
    {
        duration:1,
        easing:'linear',
        // timeline: dsRotateTimeline,
        timeline: new ScrollTimeline({
            scrollOffsets:[
                CSS.px(dsRotateOffsetTop + dsRotateHeight - window.innerHeight-200),
               CSS.px(dsRotateOffsetTop -80),
           ],
          
            // scrollOffsets:[
            //     { target: dsRotate, edge:"start", threshold: '1'},
            //     { target: dsRotate, edge:"end", threshold: '1'},
            //    ],
        })
    }
 );
}





function slideLeftImg(){
    console.log(dsRotateOffsetTop,dsRotateHeight);
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

    // const titleText = document.getElementById('page-heading');

    //     function setData() {
    //     const txt = `Upcoming Events`;
    //     return [txt, titleText]
    //     };

    //     function typeText() {
          
    //     const res =  setData();
    //     const txt = res[0];
    //     // const titleText = res[1];
    //     let i = 0;
    //     const timerId = setInterval(() => {
    //     titleText.innerHTML += txt.charAt(i);
    //     i++;
    //     if (i === txt.length) {
    //     clearInterval(timerId);
    //     }
    //     },50);
    //     }
    //     // function setData() {
    //     // const txt = `Watch me as I get typed out before your very eyes using JavaScript's setInterval() function.`;
    //     // const outputDiv = document.getElementById('typed-content');
    //     // return [txt, outputDiv]
    //     // };
        
    //     // function typeText() {
    //     // const res =  setData();
    //     // const txt = res[0];
    //     // const outputDiv = res[1];
    //     // let i = 0;
    //     // const timerId = setInterval(() => {
    //     // outputDiv.innerHTML += txt.charAt(i);
    //     // i++;
    //     // if (i === txt.length) {clearInterval(timerId);}
    //     // },50);
    //     // }
     


window.addEventListener("load", ()=>{
//     titleText.innerHTML='';
//     typeText();
// } );
// window.addEventListener("keydown", function (event) {
//     // If eye looks left
//     if (event.key == "d") {
//         titleText.innerHTML='';
//    typeText();
//    console.log(setData())
//     }
});

// let innerCursor = document.querySelector('.inner-cursor');
// let outerCursor = document.querySelector('.outer-cursor');

// document.addEventListener('mousemove',moveCursor);

// function moveCursor(e){
//     let x = e.clientX;
//     let y = e.clientY;

//     innerCursor.style.left =e.pageX + "px";
//     innerCursor.style.top =e.pageY + "px";
//     outerCursor.style.left =e.pageX + "px";
//     outerCursor.style.top =e.pageY + "px";
    
//     // innerCursor.style.transform = "translate("+e.pageX+"px,"+e.pageY +"px)";
//     // outerCursor.style.transform = "translate("+e.pageX+"px,"+e.pageY +"px)";

//     // console.log(x,y);
// }

// const headings = ;
// let headings = Array.from(document.querySelectorAll(".clickable"));
// headings.forEach((headings) => {
//     headings.addEventListener("mouseover",()=>{
//         innerCursor.classList.add("grow");
//         outerCursor.classList.add("grow");
//     });
//     headings.addEventListener("mouseleave",()=>{
//         innerCursor.classList.remove("grow");
//         outerCursor.classList.remove("grow");
//     });
// });

let noCursorElements = Array.from(document.querySelectorAll(".no-cursor"));
noCursorElements.forEach((noCursorElements) => {
    noCursorElements.addEventListener("mouseover",()=>{
        innerCursor.classList.add("hidden");
    });
    noCursorElements.addEventListener("mouseleave",()=>{
        innerCursor.classList.remove("hidden");
    });
});

let lightMode = localStorage.getItem('lightMode');
let currentMode = 0;
const lightModeToggle = document.querySelector("#light-mode-toggle");
const modeIconWrapper = document.querySelector('.mode-icon-wrapper');
const enableLightMode = ()=>{
    document.body.classList.add('light-mode');
    localStorage.setItem('lightMode','enabled');
};

const disableLightMode = ()=>{
    document.body.classList.remove('light-mode');
    localStorage.removeItem('lightMode',null);
};

const modeBtn = document.querySelector("#mode-indicator");


if (lightMode === "enabled"){
    console.log('let there be light')
    toggleLightMode(); 
    enableLightMode();
}
else{
    disableLightMode();
    toggleDarkMode();
}

lightModeToggle.addEventListener('click', ()=>{

    console.log(lightMode);
    if (localStorage.getItem('lightMode') === null){
        
        enableLightMode();
        console.log('click');
        toggleLightMode()
    } else{
        disableLightMode();
        toggleDarkMode();
    }
});

function toggleLightMode(){
    // socialsMenu.classList.remove('white-filters');
    // socialsMenu.classList.add('light-pink-filters');
    socialsMenu.classList.add('white-filters');
    // modeIconWrapper.classList.add("light-pink-filters");
    // modeIconWrapper.classList.remove("white-filters");
    modeBtn.classList.add("light-active");
    skyBG.setAttribute('data-light',true);
    
}

function toggleDarkMode(){
    // socialsMenu.classList.remove('light-pink-filters');
    socialsMenu.classList.add('white-filters');
    // modeIconWrapper.classList.remove("light-pink-filters");
    // modeIconWrapper.classList.add("white-filters");
    modeBtn.classList.remove("light-active");
    skyBG.setAttribute('data-light',false);

}