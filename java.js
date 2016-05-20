


var randomlinks=new Array()

randomlinks[0]="http://thatsthefinger.com/"
randomlinks[1]="http://heeeeeeeey.com/"
randomlinks[2]="http://www.staggeringbeauty.com/"
randomlinks[3]="http://www.fallingfalling.com/"
randomlinks[4]="http://www.lingscars.com/"
randomlinks[5]="https://www.youtube.com/watch?v=vTIIMJ9tUc8"
randomlinks[6]="https://www.youtube.com/watch?v=Ny32q6lEoUU"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}

function getValue(){
    var retVal = new Array()
    retVal = prompt("Enter numbers : ", "");
   var total=0;
  for(var i=0; i<retVal.length;i++){
   total += retvalue[i];
  }
  document.write( responses[1]);
}
