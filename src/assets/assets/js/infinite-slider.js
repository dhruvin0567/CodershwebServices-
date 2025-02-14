let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".aximo_marquee_part", {xPercent: 100, repeat: -1, duration: 3, ease: "linear"}).totalProgress(0.5);

gsap.set(".aximo_marquee_inner", {xPercent: -100});

window.addEventListener("scroll", function(){
  
  if ( window.pageYOffset > currentScroll ) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
   
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1
  });
  
  currentScroll = window.pageYOffset
});


