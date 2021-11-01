let visitor = document.querySelector(".number");
let incount = document.querySelector(".in-count");
let outcount = document.querySelector(".out-count");
let totalVisitors = document.querySelector(".resultant-count");
const inbtn = document.querySelector(".in-btn");
const outbtn = document.querySelector(".out-btn");
const resetbtn = document.querySelector(".reset-btn");

let visit = 0, inCount = 0, outCount = 0 , result = 0;
     
inbtn.addEventListener("click" ,Increment);
outbtn.addEventListener("click" ,Decrement);
resetbtn.addEventListener("click",ResetLocal);

window.addEventListener('DOMContentLoaded',OnRefresh);

function Increment(){
    ++visit;
    ++inCount;
    ++result;
    localUpdate();
    Update();
}
function Decrement(){
    if( visit <= 0){
        alert("Can't exit more persons than On - Board persons");
    }
    else{
    --visit;
    ++outCount;
    localUpdate();
    Update();
    }
}

function Update(){
    visitor.innerHTML = localStorage.getItem('vis');
    incount.innerHTML = localStorage.getItem('inc');
    outcount.innerHTML = localStorage.getItem('outc');
    totalVisitors.innerHTML = localStorage.getItem('totalV') ;
}
function localUpdate()
{
     localStorage.setItem('vis', visit);
     localStorage.setItem('inc', inCount);
     localStorage.setItem('outc', outCount);
     localStorage.setItem('totalV', result);
}
function OnRefresh(){
   visit = localStorage.getItem('vis');
   inCount = localStorage.getItem('inc') ;
    outCount = localStorage.getItem('outc') ; 
    result = localStorage.getItem('totalV');
    Update();  
}

function ResetLocal()
{    
    visit = 0 ; inCount = 0 ; outCount = 0 ; result = 0 ;
     localUpdate();
     Update();
}
