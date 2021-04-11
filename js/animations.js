const controller = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".landing",
    duration: $(window).height() - 100, 
    triggerHook: 0,
    reverse: true
})
    .setPin(".landing")
    .addIndicators({name: "1 (duration: 1000"})
controller.addScene(scene1);