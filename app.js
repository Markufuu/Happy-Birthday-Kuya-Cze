const tl = gsap.timeline({defaults: {ease: "power1.out"} });

tl
    .to('.intro-img', {y: "0%" , duration: 1.5} )
    .to('.intro-overlay', {y: "-100%", duration: 1.5})
    .to('.intro', {y: "-100%", duration: 1}, "-=1")
