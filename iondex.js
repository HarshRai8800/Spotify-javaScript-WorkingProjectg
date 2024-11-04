document.querySelector(".start").addEventListener("click",()=>{
    
})
var music;
var index;
let t = document.querySelectorAll(".poster")[10]
console.log(t)
t.addEventListener("click",()=>{
 setelement(10)
 fotelement(10)
 document.getElementById("cc").style.opacity="1"
})
let ss = document.querySelectorAll(".poster")[9]
console.log(ss)
ss.addEventListener("click",()=>{
 setelement(9)
 fotelement(9)
 document.getElementById("cc").style.opacity="1"
})
let vw = document.querySelectorAll(".poster")[8]
console.log(vw)
vw.addEventListener("click",()=>{
 setelement(8)
 fotelement(8)
 document.getElementById("cc").style.opacity="1"
})
let vv = document.querySelectorAll(".poster")[7]
console.log(vv)
vv.addEventListener("click",()=>{
 setelement(7)
 fotelement(7)
 document.getElementById("cc").style.opacity="1"
})
let w = document.querySelectorAll(".poster")[6]
console.log(w)
w.addEventListener("click",()=>{
 setelement(6)
 fotelement(6)
 document.getElementById("cc").style.opacity="1"
})
let v = document.querySelectorAll(".poster")[5]
console.log(v)
v.addEventListener("click",()=>{
 setelement(5)
 fotelement(5)
 document.getElementById("cc").style.opacity="1"
})
let u = document.querySelectorAll(".poster")[4]
console.log(u)
u.addEventListener("click",()=>{
 setelement(4)
 fotelement(5)
 document.getElementById("cc").style.opacity="1"
})
let x= document.querySelectorAll(".poster")[3]
console.log(x)
x.addEventListener("click",()=>{
 setelement(3)
 fotelement(3)
 document.getElementById("cc").style.opacity="1"
})
let y = document.querySelectorAll(".poster")[2]
console.log(y)
y.addEventListener("click",()=>{
 setelement(2)
 fotelement(2)
 document.getElementById("cc").style.opacity="1"
})
let z = document.querySelectorAll(".poster")[1]
console.log(z)
z.addEventListener("click",()=>{
 setelement(1)
 fotelement(1)
 document.getElementById("cc").style.opacity="1"
})
let p = document.querySelectorAll(".poster")[0]
console.log(p)
p.addEventListener("click",()=>{
 setelement(0)
 fotelement(0)
 document.getElementById("cc").style.opacity="1"
})
var rc;
var prev = document.querySelectorAll(".audio")[0].src;
var prevaudio=document.querySelectorAll(".audio")[0];
function eval(src,num){
    if(prev !== src){
        prevaudio.pause()
        console.log(src,num)
        num.play()
    }
    if(prev == src){
        prevaudio.pause()
        num.play()
    
    }prev=src
    prevaudio=num
} var rank =0;
var element = 0;
// document.querySelector(".x").addEventListener("click",()=>{
   
    
//        let get= document.querySelectorAll(".music")[1]
//        get.remove()
//        rank = rank +1
    
// })


document.body.querySelector(".footer").addEventListener("click",()=>{
    for(let i = 0;i<7;i++){
        if(document.getElementsByTagName("audio")[i].src == rc){
            document.getElementsByTagName("audio")[i].pause()
        }
    }
})





let count=-1;






function setelement (num){
    
    rank=rank +1
    let w = document.querySelectorAll(".poster")[num]
    console.log(w)
     let b =w.childNodes[1].src
    //  let singer = w.childNodes[9].innerText
    let d = document.querySelectorAll(".audio")[num].src
    let a =document.querySelectorAll(".audio")[num]
    let duration = document.querySelectorAll(".audio")[num].duration
    let min = Math.floor(duration/60)
    let sec = Math.floor(duration%60)
let track = document.querySelectorAll(".audio")[num].currentTime
    eval(d,a)
    
    let c = w.childNodes[6].innerText
    let v = w.querySelector(".naming").innerText

    let play = document.querySelector(".playlist")
    let div =document.createElement("div")
    div.innerHTML=`<div class="music">
    
    <img style="width: 85px;height: 85px; margin-top: 0;" src=${b} alt="img">
    <div class="crap">
        <div class="invert head">${c}|| ${v}</div>
        <div class="ltext invert">
          Duration ||  min :${(min)} sec: ${sec}        </div>
    </div>
    `
    play.append(div)
    count++
}
function fotelement(sum){
document.querySelectorAll(".onealbum")[sum].addEventListener("click",()=>{
    document.querySelector(".footer").style.opacity="1"
})
}
document.getElementById("prev").addEventListener("click",()=>{
    prevaudio.pause()
    prevaudio.previousElementSibling.play()
    prevaudio=prevaudio.previousElementSibling
})
document.getElementById("next").addEventListener("click",()=>{
    prevaudio.pause()
    prevaudio.nextElementSibling.play()
    prevaudio= prevaudio.nextElementSibling
})
document.getElementById("cc").addEventListener("click",()=>{
    document.getElementsByClassName("music")[count].remove()
    prevaudio.pause()
    
    count--
})

let clicked = 1;
document.getElementById("open").addEventListener("click",()=>{
    if(clicked%2!==0){
    prevaudio.pause()
    }
    else{
        prevaudio.play()
    }
    clicked++
})

let interval= setInterval(function delay(){
    let num;
num = prevaudio.duration
let move = 1000/prevaudio.duration
let moving = Math.floor(move)
console.log(moving)
// document.getElementsByClassName("duration")[0].innerHTML=`${ab%2}:${ab/2}`
document.getElementsByClassName("point")[0].style.left=`${moving} px`
// if(){}
clearInterval(interval)
},1000)




