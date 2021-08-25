
document.querySelector("button").addEventListener('click',() =>{
  const amount = Number(document.querySelector('input').value);
  minCurrNote(amount);

});

function minCurrNote(amount){

    var notes = ["2000","500","200","100","50","20","10","5","2","1"];
    var numberOfNotes = [];

    for(var i = 0 ; i < 10 ; i++ ){
        if(amount >= notes[i]){
            numberOfNotes[i] = Math.floor(amount/notes[i]);
            amount = amount - numberOfNotes[i]*notes[i];
        }
        else{
            numberOfNotes[i] = 0;
        }
    }
   

    for(var j=0;j<10;j++){
        if(numberOfNotes[j] != 0){
            console.log(notes[j]+ " : "+ numberOfNotes[j] + "\n");
        }
    }
    

    document.querySelector('.p2000').innerHTML = "₹ 2000" + " : " + numberOfNotes[0] +" notes";
    document.querySelector('.p500').innerHTML = "₹ 500" + " : " + numberOfNotes[1] +" notes";
    document.querySelector('.p200').innerHTML = "₹ 200" + " : " + numberOfNotes[2] +" notes";
    document.querySelector('.p100').innerHTML = "₹ 100" + " : " + numberOfNotes[3] +" notes";
    document.querySelector('.p50').innerHTML = "₹ 50 " + " : " + numberOfNotes[4] +" notes";
    document.querySelector('.p20').innerHTML = "₹ 20   " + " : " + numberOfNotes[5] +" notes";
    document.querySelector('.p10').innerHTML = "₹ 10   " + " : " + numberOfNotes[6] +" notes";
    document.querySelector('.p5').innerHTML = "₹ 5" + " : " + numberOfNotes[7] +" notes";
    document.querySelector('.p2').innerHTML = "₹ 2" + " : " + numberOfNotes[8] +" notes";
    document.querySelector('.p1').innerHTML = "₹ 1" + " : " + numberOfNotes[9] +" notes";
    
    
     
}