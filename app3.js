let gameseq = [];
let userseq = [];
 let started =  false;
 let level = 0;

  let btns = ["red","green","yellow","blue"]
  let h2 = document.querySelector("h2");

  document.addEventListener("keypress", function () {
    if(started == false) {
        started = true;

        levelup();
    }
  });

  function flashbtn(btn) {
    btn.classList.add("flash");
   setTimeout( function () {
    btn.classList.remove("flash");
   },150);
  }
  function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randidx = Math.floor(Math.random()*3);
    let randclr = btns[randidx];
    let randbtn = document.querySelector(`.${randclr}`);
    gameseq.push(randclr);
    console.log(gameseq);
    flashbtn(randbtn);
  }
  function checkans(idx) {
    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length === gameseq.length) {
            setTimeout(levelup,1000);
        }
    } else {
        h2.innerHTML = `Game over! <b>Your Score is ${level}</b> <br> Please restart the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
  }

  function btnpress() {
    let btn = this;
    flashbtn(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);

  }
  let allbtns = document.querySelectorAll(".btn");
  for(btn of allbtns) {
    btn.addEventListener("click", btnpress);
  }
  function reset() {
     level = 0;
    started = false;
    userseq = [];
    gameseq = [];
  }