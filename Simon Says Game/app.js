let gameseq=[];
let userseq=[];
let btns = ["red","yellow","green","purple"];
 
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started=true;
        levelup();
    }
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq = [];
     level++;
     h2.innerText = `level${level}`;
      
     let randIdx= Math.floor(Math.random() * 3);
     let randcolor = btns[randIdx];
     let ranbtn = document.querySelector(`.${randcolor}`);
    //  console.log(randIdx);
    //  console.log(ranbtn);
    //  console.log(randcolor);
    gameseq.push(randcolor);
     gameflash(ranbtn);
}

function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
        console.log("same value");
    } else{
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br>press any key to restart.`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },100);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level =0;
}
