const TL = gsap.timeline({
    default: {
        duration: 0.4,
        ease: "power4"
    },
});

TL
.from('.img1', {autoAlpha: 0, y: -50})
.from('.img2', {autoAlpha: 0, y: -50})
.from('.img3', {autoAlpha: 0, y: -50})
.from('h1', {autoAlpha: 0, y: -50})
.add(() => {
    console.log("End TimeLine");
})
.from('.txt', {autoAlpha: 0, y:-50, duration: 2})
