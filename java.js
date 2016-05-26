


var MAX_NUMBERS=10;

var nums=[];
for(var i=0; i<MAX_NUMBERS;i++)
{
nums[i]= Math.floor(Math.random()*10);
}
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
nums.sort();
document.write(nums)

  }
function Average(){
nums.sort();
var total = 0;
var length = 0;

for(var i = 0; i < nums.length; i++){
total += nums[i];
console.log(nums);
}
length = total/nums.length
document.write(length);
}

function median() {

var half = Math.floor(nums.length/2);
//document.write(half);
if(nums.length % 2)
{
    document.write(nums[half]);

}
else{
  document.write((nums[half-1] + nums[half]) / 2.0);
}
}
function mode(){

  var numMapping = {};
    for(var i = 0; i < nums.length; i++){
        if(numMapping[nums[i]] === undefined){
            numMapping[nums[i]] = 0;
        }
            numMapping[nums[i]] += 1;
    }
    var greatestFreq = 0;
    var mode;
    for(var prop in numMapping){
        if(numMapping[prop] > greatestFreq){
            greatestFreq = numMapping[prop];
            mode = prop;
        }
    }
    document.write(parseInt(mode));
}

//console.log(getValue());
