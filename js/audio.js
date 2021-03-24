const playBtn1 = document.getElementById("play-btn1");
const playIcon1 = document.querySelector(".play-btn1");
const slider1 = document.querySelector(".slider1");
const song1 = document.querySelector(".audio1");
const playBtn2 = document.getElementById("play-btn2");
const playIcon2 = document.querySelector(".play-btn2");
const slider2 = document.querySelector(".slider2");
const song2 = document.querySelector(".audio2");
const playBtn3 = document.getElementById("play-btn3");
const playIcon3 = document.querySelector(".play-btn3");
const slider3 = document.querySelector(".slider3");
const song3 = document.querySelector(".audio3");
let playState = "play";

playBtn1.addEventListener("click", ()=> {
    if(playState === "play"){
        playBtn1.classList.remove("fa-play"); 
        playBtn1.classList.add("fa-pause"); 
        song1.play();
        playState = "pause";
    } else {
        playBtn1.classList.remove("fa-pause"); 
        playBtn1.classList.add("fa-play"); 
        song1.pause();
        playState = "play";
    }
});
playBtn2.addEventListener("click", ()=> {
    if(playState === "play"){
        playBtn2.classList.remove("fa-play"); 
        playBtn2.classList.add("fa-pause"); 
        song2.play();
        playState = "pause";
    } else {
        playBtn2.classList.remove("fa-pause"); 
        playBtn2.classList.add("fa-play"); 
        song2.pause();
        playState = "play";
    }
});
playBtn3.addEventListener("click", ()=> {
    if(playState === "play"){
        playBtn3.classList.remove("fa-play"); 
        playBtn3.classList.add("fa-pause"); 
        song3.play();
        playState = "pause";
    } else {
        playBtn3.classList.remove("fa-pause"); 
        playBtn3.classList.add("fa-play"); 
        song3.pause();
        playState = "play";
    }
});

slider1.addEventListener("change", ()=>{
    song1.currentTime = slider1.value;
  });
  
song1.addEventListener("timeupdate", ()=> {
    slider1.value = song1.currentTime;
  });

  slider2.addEventListener("change", ()=>{
    song2.currentTime = slider2.value;
  });
  
song2.addEventListener("timeupdate", ()=> {
    slider2.value = song2.currentTime;
  });

  slider3.addEventListener("change", ()=>{
    song3.currentTime = slider3.value;
  });
  
song3.addEventListener("timeupdate", ()=> {
    slider3.value = song3.currentTime;
  });
