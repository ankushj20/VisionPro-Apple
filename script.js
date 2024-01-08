function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
loco()


gsap.to("#page>video",{
    scrollTrigger:{
        trigger:"#page>video",
        scroller: "#main",
        start:"top -2%",
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})
gsap.to("#page",{
    scrollTrigger:{
        trigger:"#page",
        scroller:"#main",
        start:"top top",
        end:"bottom top",
        pin:true,

    }
})

gsap.to("#page-bottom",{
    scrollTrigger:{
        trigger:"#page-bottom",
        scroller:"#main",
        start:"top 65%",
        end:"top 0%",

    },
    opacity:0,

    
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top top",
        scrub:1,
        pin:true
    }
})

tl.to("#page2 h1",{
    top:"-50%",
})

var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top top",
        scrub:1,
        pin:true
    }
})

tl1.to("#page3 h1",{
    top:"-50%",
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top top",
        scrub:1,
        pin:true
    }
})

tl2.to("#page4 h1",{
    top:"-50%",
})


var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start:"top top",
        scrub:1,
        pin:true
    }
})

tl5.to("#page5 h1",{
    top:"-50%",
})


var tl7 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        start:"top top",
        scrub:1,
        pin:true,
    }
})

tl7.to("#page7 h1",{
    top:"-50%",
})
var tl9 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page9 ",
        scroller:"#main",
        start:"top top",
        scrub:1,
        pin:true,
    }
})

tl9.to("#page9 #center",{
    top:"-50%",
})


var tl11 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page11 ",
        scroller:"#main",
        start:"top top",
        scrub:1,
        pin:true,
    }
})

tl11.to("#page11 #centerr",{
    top:"-50%",
})


var tl13 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page13 ",
        scroller:"#main",
        start:"top top",
        scrub:1,
        pin:true,
    }
})

tl13.to("#page13 #centerrr",{
    top:"-50%",
})


var tl16 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page16 ",
        scroller:"#main",
        start:"top top",
        scrub:1,
        pin:true,
    }
})

tl16.to("#page16 #centering",{
    top:"-50%",
})