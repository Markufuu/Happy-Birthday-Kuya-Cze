const tl = gsap.timeline({defaults: {ease: "power1.out"} });
const btn =  document.querySelector('.btn');
const rickroll = document.querySelector('.rickroll');

tl
    .to('.intro-img', {y: "0%" , duration: 2} )
    .to('.intro-overlay', {y: "-100%", duration: 1})
    .to('.intro', {y: "-100%", duration: 1}, "-=.8")






btn.addEventListener('click', () => {
    rickroll.style.zIndex = "9999";
    rickroll.play();
});