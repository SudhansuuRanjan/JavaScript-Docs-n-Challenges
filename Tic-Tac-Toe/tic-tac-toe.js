let num = document.querySelectorAll(".btn").length;
var player11 = document.querySelector(".player1").length;
var player12 = document.querySelector(".player2").length;
var msgtxt = document.querySelector(".msgtxt");
var p1Score = document.querySelector(".p1-score");
var p2Score = document.querySelector(".p2-score");
let p1score = 0,p2score = 0;
let temp = 0;
let arr = [0,0,0,0,0,0,0,0,0];
var win = 0;


if( win == 1){
    console.log(win);
 document.querySelector(".coverb").classList.add("none");
}
else if(win == 0){
for (let i = 0; i < num; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function(event) {      
        if(arr[i] == 0){
            if(temp % 2 == 0){
                arr[i] = 2;
                playerChange();
                msgtxt.innerHTML = "Player 2's Chance !!!";
                msgtxt.classList.remove("red");
                msgtxt.classList.add("violet");
                event.target.innerHTML = `
                <div class="grid"> X </div>`;
                temp++;
                event.target.classList.add("red");
                    if(winCheck(2)){
                        msgtxt.innerHTML = "Player 1 Won !!!";
                         win = 1;
                        winScore(2);
                        winColor();
                        console.log("p1 wins");
                    }
                    else if(winCheck(3)){
                        msgtxt.innerHTML = "Player 2 Won !!!";
                         win = 1;
                        winScore(3);
                        winColor();
                        console.log("p2 wins");
                    }
            }
            else{
                arr[i] = 3;
                playerChange();
                msgtxt.innerHTML = "Player 1's Chance !!!";
                msgtxt.classList.remove("violet");
                msgtxt.classList.add("red");
                event.target.innerHTML = `
                <div class="grid"> O </div>
                `;
                temp++; 
                event.target.classList.add("blue");
                    if(winCheck(2)){
                        msgtxt.innerHTML = "Player 1 Won !!!";
                         win = 1;
                        winScore(2);
                        winColor();
                        console.log("p1 wins");
                    }
                    else if(winCheck(3)){
                        msgtxt.innerHTML = "Player 2 Won !!!";
                         win = 1;
                        winScore(3);
                        winColor();
                        console.log("p2 wins");
                    }
            }
      }
  });
}
}
function playerChange(){
    document.querySelector(".player1").classList.toggle("animate1");
    document.querySelector(".player2").classList.toggle("animate2");
}

function winCheck(arg){
    if( arr[0] == arr[1] && arr[1]==arr[2] && arr[2]==arg){
        return true; 
    }
    else if(arr[3] == arr[4] && arr[4]==arr[5] && arr[5]==arg){
        return true;
    }
    else if(arr[6] == arr[7] && arr[7]==arr[8] && arr[8]==arg){
        return true;
    }
    else if(arr[0] == arr[3] && arr[3]==arr[6] && arr[6]==arg){
        return true;
    }
    else if(arr[1] == arr[4] && arr[4]==arr[7] && arr[7]==arg){
        return true;
    }
    else if(arr[2] == arr[5] && arr[5]==arr[8] && arr[8]==arg){
        return true;
    }
    else if(arr[0] == arr[4] && arr[4]==arr[8] && arr[8]==arg){
         return true;
    }
    else if(arr[6] == arr[4] && arr[4]==arr[2] && arr[2]==arg){
        return true;
    }
    else{
        return false;
    }
}

function winColor(){
    msgtxt.classList.remove("red");
    msgtxt.classList.remove("violet");
    msgtxt.classList.add("green");
}

function winScore(arg){
   if(arg == 2){
       ++p1score;
   }
   else if( arg == 3){
       ++p2score;
   }
   p1Score.innerHTML = p1score;
   p2Score.innerHTML = p2score;
}