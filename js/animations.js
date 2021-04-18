const logo = document.getElementById("logo");
const tlOpen = gsap.timeline();

tlOpen
.from(logo, {duration: 1, scale: 2, y: "40vh", delay: 2})
.from(".landing-text", {duration: 1, x: "-100vw"})
.from(".landing-img", {duration: 1, x:"100vw"}, "-=0.5")
.from(".burger", {duration: 1, opacity: 0});

const tlLanding = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing",
        start: "5% top",
        pin: true, 
        end: "90%",
        scrub: 1,
        anticipatePin: 1,
        pinSpacing: false,
    }
});
tlLanding
.to(".landing", {opacity: 0, scale: 0});

const tlAudio = gsap.timeline({
    scrollTrigger: {
        trigger: ".audio-samples",
        start: "5% top",
        pin: true, 
        end: "140%",
        scrub: 1,
        anticipatePin: 1,
        pinSpacing: false,
    }
});
tlAudio
.to(".audio-samples", {opacity: 0, scale: 0},);

const tlBio = gsap.timeline({
    scrollTrigger: {
        trigger: ".bio",
        start: "5% top",
        pin: true, 
        end: "90%",
        scrub: 1,
        anticipatePin: 1,
        pinSpacing: false
    }
});
tlBio
.to(".bio", {opacity: 0, scale: 0});