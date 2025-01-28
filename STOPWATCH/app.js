const timeEl = document.querySelector(".time") //querySelector เลือกทั้ง Element
const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const resetBtn = document.querySelector(".reset")
//เวลา 1000ms = 1s , 60s => 1m , 60m => 1hr
let [millseconds,seconds,minutes,hours]=[0,0,0,0] //สร้างหลายตัวแปรในรูปแบบเดียวกัน ใช้รูปแบบ Array
let timer = null //null ค่าว่าง

startBtn.addEventListener("click",startTimer) //startTImer ชื่อฟังก์ชั่น ให้เริ่มทำงานฟังก์ชั่น
pauseBtn.addEventListener("click",pauseTimer)
resetBtn.addEventListener("click",resetTimer)

function startTimer(){
    if(timer!=null){ //!= ไม่เท่ากับ
        clearInterval(timer) //clearInterval เพื่อยกเลิกการทำงานดังกล่าว 
    }
    timer = setInterval(displayTime,10) //ฟังก์ชัน setInterval ใช้เพื่อกำหนดให้โปรแกรมทำงานเป็นระยะจากช่วงเวลาที่กำหนด 
}

function pauseTimer(){
    clearInterval(timer)
}

function resetTimer(){
    clearInterval(timer)
    hours=0
    minutes=0
    seconds=0
    millseconds=0
    timeEl.innerHTML="00:00:00:000"
}

function displayTime(){
    millseconds+=10
    if(millseconds===1000){//=== คือเท่ากับใน function
        millseconds=0
        seconds++
        if(seconds===60){
            seconds=0
            minutes++
            if(minutes===60){
                minutes=0
                hours++
            }
        }
    }
    //ternary operator
    let h = hours<10 ? "0"+hours : hours //?ถ้าตรง เป็นจริง :ไม่ เท็จ
    let m = minutes<10 ? "0"+minutes : minutes
    let s = seconds<10 ? "0"+seconds : seconds
    let ms = millseconds<10 ? "0"+millseconds : millseconds
    timeEl.innerHTML=`${h}:${m}:${s}:${ms}`
}