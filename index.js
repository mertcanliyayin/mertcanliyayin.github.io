const bar = document.querySelector(".bar");
const navbar = document.querySelector(".navbar");
let ayar1 = document.querySelector("#ayar1");
let ayar2 = document.querySelector("#ayar2");
let ayar3 = document.querySelector("#ayar3");
let ayar4 = document.querySelector("#ayar4");
let ayar5 = document.querySelector("#ayar5");
let ayar6 = document.querySelector("#ayar6");
let ayar7 = document.querySelector("#ayar7");
let ayar8 = document.querySelector("#ayar8");
let ayar9 = document.querySelector("#ayar9");
let submit = document.querySelector(".submit");
let video1 = document.querySelector("#video1");
let video2 = document.querySelector("#video2");
let video3 = document.querySelector("#video3");
let video4 = document.querySelector("#video4");
let video5 = document.querySelector("#video5");
let video6 = document.querySelector("#video6");
let video7 = document.querySelector("#video7");
let video8 = document.querySelector("#video8");
let video9 = document.querySelector("#video9");

bar.addEventListener("click",function(){
    navbar.classList.toggle('active');
});


submit.addEventListener("click",function(){
    video1.src = "https://www.youtube.com/embed/" + ayar1.value + "?autoplay=1&mute=1";

});

submit.addEventListener("click",function(){
    video2.src = "https://www.youtube.com/embed/" + ayar2.value + "?autoplay=1&mute=1";

});
submit.addEventListener("click",function(){
    video3.src = "https://www.youtube.com/embed/" + ayar3.value + "?autoplay=1&mute=1";

});
submit.addEventListener("click",function(){
    video4.src = "https://www.youtube.com/embed/" + ayar4.value + "?autoplay=1&mute=1";

});
submit.addEventListener("click",function(){
    video5.src = "https://www.youtube.com/embed/" + ayar5.value + "?autoplay=1&mute=1";

});
submit.addEventListener("click",function(){
    video6.src = "https://www.youtube.com/embed/" + ayar6.value + "?autoplay=1&mute=1";

});
submit.addEventListener("click",function(){
    video7.src = "https://www.youtube.com/embed/" + ayar7.value + "?autoplay=1&mute=1";

});
submit.addEventListener("click",function(){
    video8.src = "https://www.youtube.com/embed/" + ayar8.value + "?autoplay=1&mute=1";

});
submit.addEventListener("click",function(){
    video9.src = "https://www.youtube.com/embed/" + ayar9.value + "?autoplay=1&mute=1";

});

    
