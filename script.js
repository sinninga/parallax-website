let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.rock', 3, {y: -300})
    .to('.girl1', 3, {y: -200}, '-=3')
    .fromTo('.bg1', {y: -90}, {y: 0, duration: 3}, '-=3')
    .to('.content', 3, {top: '0%'}, '-=3')
    .fromTo('.content-images', {opacity: 0}, {opacity: 1, duration: 3});

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "300%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);

let controller2 = new ScrollMagic.Controller();
let timeline2 = new TimelineMax();

timeline2
    // .to('.content', 3, {top: '0%'}, '-=3')
    .fromTo('.content-images2', {opacity: 0}, {opacity: 1, duration: 3});

let scene2 = new ScrollMagic.Scene({
    triggerElement: ".content-images2",
    duration: "100%",
    triggerHook: 0,
})
    .setTween(timeline2)
    .setPin(".content-images2")
    .addTo(controller2);


