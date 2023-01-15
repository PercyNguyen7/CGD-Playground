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
let dsScreen2 = document.querySelector('.screen-2')
let menuOpen = false;
let slidesWrapper = document.getElementById('slides-wrapper');
let slideIndicators = document.getElementsByClassName('slide-indicators');
let imgWrappers = document.getElementsByClassName('img-wrappers');



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
const media45To85 = window.matchMedia('(min-width: 45em) and (max-width: 84.99em)');
const mediaMore85 = window.matchMedia('(min-width: 85em)');
const mediaLower45vw = window.matchMedia('(max-width: 44.99em)');
// Check if the media query is true
const scrollTracker = document.querySelector('.scroll-tracker');
const skyBG = document.querySelector('#sky-bg');

const animatedHeadings = document.querySelectorAll(".slide-lr-scroll");

animatedHeadings.forEach((heading)=>{
    console.log(heading);
    const headingOffsetTop = heading.offsetTop;
    const headingOffsetHeight = heading.offsetHeight;
    console.log(headingOffsetTop, headingOffsetHeight, window.innerHeight);
    heading.animate(
    
        {   
          transform: ['translateX(100px)', 'translateX(0px)'], 
        //   color:['hsl(var(--clr-white))','hsl(var(--clr-pink))']
          opacity: ['0.3','1']
        },
        {
            duration: 1,
            easing: 'linear',
            timeline: new ScrollTimeline({
                scrollOffsets:[
                            CSS.px(headingOffsetTop + headingOffsetHeight - window.innerHeight -100),
                            CSS.px(headingOffsetTop -300),
                        ],
            }),
        }
    );
});

const animatedMembers = document.querySelectorAll(".slide-du-scroll");

animatedMembers.forEach((image)=>{


    const imgOffsetTop = image.offsetTop;
    const imgOffsetHeight = image.offsetHeight;
    console.log(imgOffsetTop, imgOffsetHeight, window.innerHeight);

    if (mediaLower45vw.matches){
    image.animate(
        {   
          transform: ['translateY(0rem)', 'translateY(-12rem)'], 
        //   color:['hsl(var(--clr-white))','hsl(var(--clr-pink))']
        //   opacity: ['0.6','1']
        },
        {
            duration: 1,
            easing: 'linear',
            timeline: new ScrollTimeline({
                scrollOffsets:[

                    CSS.px(imgOffsetTop + imgOffsetHeight - window.innerHeight-400),
                    CSS.px(imgOffsetTop+600),
                    ],
                // scrollOffsets: [CSS.percent(60), CSS.percent(80)],
            }),
        }
    );
}
    else if(media45To85.matches){
        console.log('45 to 85');
        image.animate(
          
            {   
              transform: ['translateY(0)', 'translateY(-11rem)'], 
            //   color:['hsl(var(--clr-white))','hsl(var(--clr-pink))']
            //   opacity: ['0.6','1']
            },
            {
                duration: 1,
                easing: 'linear',
                timeline: new ScrollTimeline({
                    scrollOffsets:[
    
                        CSS.px(imgOffsetTop + imgOffsetHeight - window.innerHeight-200),
                        CSS.px(imgOffsetTop+600),
                        ],
                    // scrollOffsets: [CSS.percent(60), CSS.percent(80)],
                }),
            }
        );
    }
    else if(mediaMore85.matches){
        image.animate(
            {   
              transform: ['translateY(0)', 'translateY(-14rem)'], 
            //   color:['hsl(var(--clr-white))','hsl(var(--clr-pink))']
            //   opacity: ['0.6','1']
            },
            {
                duration: 1,
                easing: 'linear',
                timeline: new ScrollTimeline({
                    scrollOffsets:[
    
                        CSS.px(imgOffsetTop + imgOffsetHeight - window.innerHeight-100),
                        CSS.px(imgOffsetTop+ 600),
                        ],
                    // scrollOffsets: [CSS.percent(60), CSS.percent(80)],
                }),
            }
        );
    }
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

//     // innerCursor.style.left =e.pageX + "px";
//     // innerCursor.style.top =e.pageY + "px";
//     // outerCursor.style.left =e.pageX + "px";
//     // outerCursor.style.top =e.pageY + "px";
    
//     innerCursor.style.transform = "translate("+e.pageX+"px,"+e.pageY +"px)";
//     outerCursor.style.transform = "translate("+e.pageX+"px,"+e.pageY +"px)";

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

// If toggle light mode,
lightModeToggle.addEventListener('click', ()=>{

    console.log(lightMode);
    //if lightmode is not in local storage, then toggle light mode
    if (localStorage.getItem('lightMode') === null){    
        enableLightMode();
        console.log('click');
        toggleLightMode()
    } 
    // if lightmode is retrieved, then toggle dark mode
    else{
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