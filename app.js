var min=0;
var sec=0;
var msec=0;



var minute=document.getElementById("min")
var second=document.getElementById("sec");
var msecond=document.getElementById("msec");



var interval;

function timer (){
msec++;
msecond.innerHTML= msec;
if (msec>=100){
    sec++;
    second.innerHTML=sec;
    msec=0;
}
if (sec>=60){
    min++;
    minute.innerHTML=min;
    sec=0;
}
}
function start(){
interval = setInterval(timer,10)
document.getElementById("disable").disabled = true;
document.getElementById("disable1").disabled = false;
document.getElementById("disable2").disabled = false;


}

function stop(){
   clearInterval(interval)
document.getElementById("disable").disabled = false;
document.getElementById("disable1").disabled = true;
document.getElementById("disable2").disabled = false;

}
function reset(){
    min=0;
    sec=0;
    msec=0;
    minute.innerHTML = min;
    second.innerHTML = sec;
    msecond.innerHTML = msec;
    stop();
document.getElementById("disable").disabled = false;
document.getElementById("disable1").disabled = false;
document.getElementById("disable2").disabled = true;

    
}
function disableButton(){
    document.getElementById("s").disabled = true;
    
    
}



