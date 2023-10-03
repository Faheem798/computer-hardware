const videoCon = document.querySelector('#videocontainer')
const play = document.querySelector('#play')
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function videoConanim(){
    videoCon.addEventListener('mouseenter',()=>{
        gsap.to(play,{
            scale:1,
            opacity:0.6
        })
    })
    videoCon.addEventListener('mouseout',()=>{
        gsap.to(play,{
            scale:0,
            opacity:0
        })
    })
    videoCon.addEventListener('mousemove',(dets)=>{
        gsap.to(play,{
            top: dets.y- 80,
            left:dets.x-80
    
        })
    
    })
}
videoConanim()
function loadingAnimation(){
    gsap.from('.main h1',{
        y: 29,
        opacity: 0,
        delay: 0.29,
        duration:0.83,
        stagger: 0.13
    })
    gsap.from('#videocontainer',{
        y: 29,
        opacity: 0,
        scale: 0.33,
        delay: 1.09,
        duration:0.33,
    })
}
loadingAnimation()
