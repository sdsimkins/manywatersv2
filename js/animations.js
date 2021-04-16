const logo = document.getElementById("logo");
const tlOpen = gsap.timeline();
const tlLanding = gsap.timeline();

tlOpen
.from(logo, {duration: 1, fontSize: 98, y: "150%", delay: 2})
.from(".landing-text", {duration: 1, x: "-100vw"})
.from(".landing-img", {duration: 1, x:"100vw"}, "-=0.5")
.from(".burger", {duration: 1, opacity: 0});


const landingAni = tlLanding
.to(".landing-text", {duraction: 2, x: "-100vw"});

ScrollTrigger.create({
     trigger: ".landing",
     start: "top top",
     end: "100%",
     pin: true,
     markers: true,
});

ScrollTrigger.create({
    trigger: ".audio-samples",
    start: "top top",
    end: "100%",
    pin: true,
    markers: true,
});


ScrollTrigger.create({
    trigger: ".bio",
    start: "top top",
    end: "100%",
    pin: true,
    markers: true,
});


