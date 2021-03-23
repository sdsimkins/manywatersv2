const playBtn1 = document.querySelector(".play-btn1");
const playIcon1 = document.querySelector(".play-btn1 i");
const song1 = document.querySelector(".audio1");
const playBtn2 = document.querySelector(".play-btn2");
const playIcon2 = document.querySelector(".play-btn2 i");
const song2 = document.querySelector(".audio2");
const playBtn3 = document.querySelector(".play-btn3");
const playIcon3 = document.querySelector(".play-btn3 i");
const song3 = document.querySelector(".audio3");
let playState = "play";

playBtn1.addEventListener("click", ()=> {
    if(playState === "play"){
        playIcon1.classList.remove("fa-play"); 
        playIcon1.classList.add("fa-pause"); 
        song1.play();
        playState = "pause";
    } else {
        playIcon1.classList.remove("fa-pause"); 
        playIcon1.classList.add("fa-play"); 
        song1.pause();
        playState = "play";
    }
});
playBtn2.addEventListener("click", ()=> {
    if(playState === "play"){
        playIcon2.classList.remove("fa-play"); 
        playIcon2.classList.add("fa-pause"); 
        song2.play();
        playState = "pause";
    } else {
        playIcon2.classList.remove("fa-pause"); 
        playIcon2.classList.add("fa-play"); 
        song2.pause();
        playState = "play";
    }
});
playBtn3.addEventListener("click", ()=> {
    if(playState === "play"){
        playIcon3.classList.remove("fa-play"); 
        playIcon3.classList.add("fa-pause"); 
        song3.play();
        playState = "pause";
    } else {
        playIcon3.classList.remove("fa-pause"); 
        playIcon3.classList.add("fa-play"); 
        song3.pause();
        playState = "play";
    }
});