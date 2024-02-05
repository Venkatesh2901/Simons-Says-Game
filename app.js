let gameSeq = [];
let userSeq = [];

let btns = ["color1","color2","color3","color4"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});


function levelUp() {
    userSeq = []; // Reset
    level++;
    h2.innerText = `Level ${level}`;
  
    let randomIdx = Math.floor(Math.random() * 3); 
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
  
    gameSeq.push(randomColor);
  
    gameFlash(randomBtn);
  }
  


function gameFlash(currBtn){
  currBtn.classList.add("flash");

  setTimeout(function(){
     currBtn.classList.remove("flash");
  },250);
}


function userFlash(currBtn){
    currBtn.classList.add("Userflash");
  
    setTimeout(function(){
       currBtn.classList.remove("userflash");
    },250);
}



function checkAns(idx){
   if(userSeq[idx]==gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
         setTimeout(levelUp,1000);
      }
   } 
   else{
     h2.innerHTML=`Game Over! Your score was <b>${level}</b>  <br>  Press any key to restart`;
     document.querySelector("body").style.backgroundColor="red";

     setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
     },150);
     
     reset();
   }
}


function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
}


function btnPress(){
    let btn = this;
    userFlash(this);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


