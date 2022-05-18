let topLeft = document.getElementById('topLeft');
let midLeft = document.getElementById('midLeft');
let botLeft = document.getElementById('botLeft');
let topMid = document.getElementById('topMid');
let topRight = document.getElementById('topRight');
let midMid = document.getElementById('midMid');
let midRight = document.getElementById('midRight');
let botMid = document.getElementById('botMid');
let botRight = document.getElementById('botRight');
let startPage = document.getElementById('startPage');
let startButton = document.getElementById('startButton');
let block = document.getElementById('block');
let winScreen = document.getElementById('winPage');
let playAgainWin = document.getElementById('playAgainWin');
let playAgainLose = document.getElementById('playAgainLose');
let restartButton = document.getElementById('restartButton');
let loseScreen = document.getElementById('losePage')
let TL = 0;
let ML = 0;
let BL = 0;
let TM = 0;
let MM = 0;
let BM = 0;
let TR = 0;
let MR = 0;
let BR = 0;



startButton.addEventListener('click', gameStart);
playAgainWin.addEventListener('click', restart);
playAgainLose.addEventListener('click', restart);
restartButton.addEventListener('click', restart);

function restart(){
    window.location.reload();
}
function gameStart(){
    startPage.style.left = '101vw';
    startPage.style.opacity = '0%';
playerTurn()
}
function playerTurn(){
    topLeft.addEventListener('click', function(){
        play(1);
        block.style.left = '0%'
    
    }) 
    topMid.addEventListener('click', function(){
        play(2)
        block.style.left = '0%'
    })
    topRight.addEventListener('click', function(){
        play(3)
        block.style.left = '0%'
    })
    midMid.addEventListener('click', function(){
        play(4)
        block.style.left = '0%'
    })
     botMid.addEventListener('click', function(){
        play(5)
        block.style.left = '0%'
    })
    midLeft.addEventListener('click', function(){
        play(6)
        block.style.left = '0%'
    })
     midRight.addEventListener('click', function(){
        play(7)
        block.style.left = '0%'
    })
    
    botLeft.addEventListener('click', function(){
        play(8)
        block.style.left = '0%'
    })
    botRight.addEventListener('click', function(){
        play(9)
        block.style.left = '0%'
    })
}
    

function aiTurn(){
     let pos = Math.floor(Math.random() * 9) + 1  
    if (pos === 1 && topLeft.childNodes.length === 0){
        topLeft.innerHTML = 'O';
        TL = 2;
        console.log(TL)
        checkWin()
        playerNextTurn();
    } else if (pos === 1 && topLeft.childNodes.length !== 0){
        aiTurn()
    } else if (pos === 2 && topMid.childNodes.length === 0){
        topMid.innerHTML = 'O';
        TM = 2;
        checkWin()
        playerNextTurn();
    } else if (pos === 2 && topMid.childNodes.length !== 0){
        aiTurn()
    } 
    else if (pos === 3 && topRight.childNodes.length === 0){
        topRight.innerHTML = 'O';
        TR = 2;
        checkWin()
        playerNextTurn();
    } else if (pos === 3 && topRight.childNodes.length !== 0){
        aiTurn()
    } 
    else if (pos === 4 && midLeft.childNodes.length === 0){
        midLeft.innerHTML = 'O';
        ML = 2;
        checkWin()
        playerNextTurn();
    } else if (pos === 4 && midLeft.childNodes.length !== 0){
        aiTurn()
    } 
    else if (pos === 5 && midMid.childNodes.length === 0){
        midMid.innerHTML = 'O';
        MM = 2;
        checkWin()
        playerNextTurn();
    } else if (pos === 5 && midMid.childNodes.length !== 0){
        aiTurn()
    } 
    else if (pos === 6 && midRight.childNodes.length === 0){
        midRight.innerHTML = 'O';
        MR = 2;
        checkWin()
        playerNextTurn();
    } else if (pos === 6 && midRight.childNodes.length !== 0){
        aiTurn()
    } 
    else if (pos === 7 && botLeft.childNodes.length === 0){
        botLeft.innerHTML = 'O';
        BL = 2;
        checkWin()
        playerNextTurn();
    } else if (pos === 7 && botLeft.childNodes.length !== 0){
        aiTurn()
    } 
    else if (pos === 8 && botMid.childNodes.length === 0){
        botMid.innerHTML = 'O';
        BM = 2;
        checkWin()
        playerNextTurn();
    } else if (pos === 8 && botMid.childNodes.length !== 0){
        aiTurn()
        
    } 
    else if (pos === 9 && botRight.childNodes.length === 0){
        botRight.innerHTML = 'O';
        BR = 2;
        checkWin()
        playerNextTurn();
    } else if (pos === 9 && botRight.childNodes.length !== 0){
        aiTurn()}
    // } else if (botRight.childNodes.length !== 0 && botMid.childNodes.length !== 0 && botLeft.childNodes.length !== 0 %% topRight.childNodes.length !== 0 && topMid.childNodes.length !== 0 && topLeft.childNodes.length !== 0 && midRight.childNodes.length !== 0 && midMid.childNodes.length !== 0 && midLeft.childNodes.length !== 0){
    //     checkWin();
    // }
     else {
        aiTurn()
    }
}
function play(place){
    switch (place){
        case 1:
            console.log('topLeft')
            if (TL == 0){
            topLeft.innerHTML = "X";
            place = 'done';
            TL = 1;
            checkWin();
            aiTurn();}
            else {
                console.log('try again')
            }

        break;
        case 2:
            console.log('topMid');
            if (TM == 0){
            topMid.innerHTML = "X";
            place = 'done';
            TM = 1;
            checkWin();
            aiTurn();}
            else {
                console.log('try again')
            }
        break;
        case 3:
            console.log('topRight');
            if (TR == 0){
            topRight.innerHTML = "X";
            place = 'done';
            TR = 1;
            checkWin();
            aiTurn();}
            else {
                console.log('try again')
            }
        break;
        case 4:
            console.log('midMid');
            if (MM == 0){
            midMid.innerHTML = "X";
            place = 'done';
            MM = 1;
            checkWin();
            aiTurn();}
            else {
                console.log('try again')
            }
        break;
        case 5:
            console.log('botMid');
            if (BM == 0){
            botMid.innerHTML = "X";
            place = 'done';
            BM = 1;
            checkWin();
            aiTurn();}
            else {
                console.log('try again')
            }
        break;
        case 6:
            console.log('midLeft');
            if (ML == 0){
            midLeft.innerHTML = "X";
            place = 'done';
            ML = 1;
            checkWin();
            aiTurn();}
            else {
                console.log('try again')
            }
        break;
        case 7:
            console.log('midRight');
            if (MR == 0){
            midRight.innerHTML = "X";
            place = 'done';
            MR = 1;
            checkWin();
            aiTurn();}
            else {
                console.log('try again')
            }
        break;
        case 8:
            console.log('botLeft');
            if (BL == 0){
            botLeft.innerHTML = "X";
            place = 'done';
            BL = 1;
            checkWin();
            aiTurn();}
            else {
                console.log('try again')
            }
        break;
        case 9:
            console.log('botRight');
            if (BR == 0){
            botRight.innerHTML = "X";
            place = 'done';
            BR = 1;
            checkWin();
            aiTurn();}
            else {
                console.log('try again')
            }
        break;
       
    }

}
function win(){
    winScreen.style.zIndex = '121';
    winScreen.style.opacity = '100%';
}
function lose(){
    loseScreen.style.zIndex = '121';
    loseScreen.style.opacity = '100%';
}
function checkWin(){
if (TL == 1 && BL == 1 && ML == 1){
   win()
}
if (TL == 1 && TM == 1 && TR == 1){
    win()
 }
 if (TL == 1 && MM == 1 && BR == 1){
    win()
 }
 if (ML == 1 && MM == 1 && MR == 1){
    win()
 }
 if (BL == 1 && MM == 1 && TR == 1){
    win()
 }
 if (TM == 1 && MM == 1 && BM == 1){
    win()
 }
 if (TR == 1 && MR == 1 && BR == 1){
    win()
 }
 if (BL == 1 && BM == 1 && BR == 1){
    win()
 }
 if (TL == 2 && BL == 2 && ML == 2){
    lose()
 }
 if (TL == 2 && TM == 2 && TR == 2){
     lose()
  }
  if (TL == 2 && MM == 2 && BR == 2){
     lose()
  }
  if (ML == 2 && MM == 2 && MR == 2){
     lose()
  }
  if (BL == 2 && MM == 2 && TR == 2){
     lose()
  }
  if (TM == 2 && MM == 2 && BM == 2){
     lose()
  }
  if (TR == 2 && MR == 2 && BR == 2){
     lose()
  }
  if (BL == 2 && BM == 2 && BR == 2){
     lose()
  }
}

function playerNextTurn(){
    block.style.zIndex = '0'
}