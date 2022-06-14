const tl = gsap.timeline({defaults: {ease: "power1.out"} });
const btn =  document.querySelector('.btn');
const rickroll = document.querySelector('.rickroll');

tl
    .to('.intro-img', {
        keyframes: [
            {y:0, duration: 1.2},
            {y:0, duration: .5}
        ]
    })

    .to('.intro-overlay', {y: "-100%", duration: 1})
    .to('.intro', {y: "-100%", duration: 1}, "-=.8")






btn.addEventListener('click', () => {
    rickroll.style.zIndex = "9999";
    rickroll.play();
});