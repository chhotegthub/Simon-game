/*let gameseq= [];
let userseq= [];


let btns= ["yellow", "red", "purple","green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener( "keypress", function(){
  if(started == false) {
    console.log("game is started");
    started = true;
   
    levelup(); 
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}




function levelup(){
  level++;
  h2.innerText =`Level ${level}`;

  let randIdx = Math.floor(Math.random() *3);
  let randColor = btns[randIdx]
  let randBtn = document.querySelector(`.${randColor}`);
  console.log(randIdx);
  console.log(randColor);
  console.log(randBtn);
  btnFlash();

  if (randBtn) {
    btnFlash(randBtn); // Pass the random button to btnFlash
  }
 }
  */


let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game is started");
    started = true;
    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3); // Fixed range to 4
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameseq.push(randColor);
  console.log(gameseq);
  gameFlash(randBtn);

  if (randBtn) {
    gameFlash(randBtn); // Pass the random button to btnFlash
  }
}

function checkAns(idx){
  //console.log("current level : ", level);

  if(userseq[idx] === gameseq[idx]) {
    if(userseq.length === gameseq.length) {
      setTimeout(levelup(),1000);
    }
  }else{
    h2.innerHTML = `Geme Over! your score was <b>${level}</b> <br> press any key to start.`;
    document.querySelector("body").style.background = "red";
    setTimeout(function() {
      document.querySelector("body").style.background = "white";
    }, 150);
    reset();
  }
}

 function btnpress(){
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userseq.push(userColor);

  checkAns(userseq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns) {
  btn.addEventListener("click",btnpress);
 }


 function reset(){
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
 }