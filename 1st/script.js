var tl=gsap.timeline()
tl.from("#nav img,#nav .part-2 p,#nav .part-3", {
  y: -100,
  opacity: 0,
  duration: 1.5,
  stagger: .2,
});
tl.from(".head h1",{
y:100,
opacity:0
})
tl.from(".one",{
x:-100,
opacity:0
})
tl.from(".two",{
x:20,
opacity:0
})
tl.from(".three",{
y:-100,
opacity:0
})
tl.from(".four",{
y:100,
opacity:0
})
tl.from(".down",{
    scale:0,
    opacity:0
})
tl.to(".down",{
y:40,
repeat:-1,
duration:1,
yoyo:true,

})