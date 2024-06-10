var timer=60
var btn=document.querySelector("#pbtm")
var score=0;
var rn=0;
var prevscore=0;
function make(params) {
    var clutter =" ";
    for(var i=1 ;i <= 102;i++){
        var num =Math.floor(Math.random()*10)
        clutter+=`<div class="bubble">${num}</div>`
    }
    document.querySelector("#pbtm").innerHTML=clutter; 
}

function maketimer(params) {
    var count = setInterval(function name(params) {
    if (timer>0) {
        timer--;
        document.querySelector(".timerbox").textContent=timer;
    }
    else{
        clearInterval(count)
        document.querySelector("#pbtm").innerHTML= `<h1>Game Over<h1>`;
    }
    },1000);
}

function hitval(params) {
     rn =Math.floor(Math.random()*10)
    document.querySelector(".hitval").textContent=rn;
}
function realsc() {
    score +=10;
    document.querySelector(".realscore").textContent=score;
  
}

btn.addEventListener('click', function (e) {
   var clicknum =  Number(e.target.textContent);
    console.log(clicknum)
    console.log(rn)
    if (clicknum === rn) {
    realsc();
    hitval();
    make();
    
}
});
make();
maketimer();
hitval();




