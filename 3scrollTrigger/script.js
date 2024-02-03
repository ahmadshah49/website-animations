gsap.to("#page1 .log",{
transform:"translateX(-250%)",
fontWeight:50,
scrollTrigger:{
trigger:"#page1 ",
scroller:"body",
// markers:true,
start:"top 0",
end:"top -400%",
scrub:2,
pin:true,
}

})