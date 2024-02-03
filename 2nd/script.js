var tl=gsap.timeline()
tl.from("#nav .nav-part-1 #logo,#nav .nav-part-1 .links p,#nav", {
  y: -100,
  opacity:0,
  delay: 0.4,
    stagger: 0.2,
});

tl.from("#nav .nav-part-2", {
  y: -100,
  delay: 0.4,
  stagger: 0.2,
});
gsap.from("#page-2 .box", {
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page-2 .box",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        // scrub:true
    }
});