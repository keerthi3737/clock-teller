const display=document.getElementById("display")
let timer=null
let star=0
let elasped=0
let running=false
function start(){
    if(!running){
        star=Date.now()-elasped
        timer=setInterval(update,10)
        running=true
    }
}
function stop(){
    if(running){
        clearInterval(timer)
        elasped=Date.now()-star;
        running=false


    }
}
function reset(){
    clearInterval(timer)
    star=0
    elasped=0
    running=false
   display.textContent="00:00:00:00"
}
function update(){
const current=Date.now()
elasped=current-star
let hour=Math.floor(elasped/(1000*60*60))
let min=Math.floor(elasped/(1000*60)%60)
let sec=Math.floor(elasped/(1000)%60)
let milli=Math.floor((elasped%(1000)/10))
hour=String(hour).padStart(2,"0")
min=String(min).padStart(2,"0")
sec=String(sec).padStart(2,"0")
milli=String(milli).padStart(2,"0")

display.textContent=`${hour}:${min}:${sec}:${milli}`
}