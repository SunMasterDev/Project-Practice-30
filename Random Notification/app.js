//0-4 เลข Index ใน array 5 ตัว

const btn =document.querySelector(".btn")

const container =document.querySelector(".container")

const messages =[
    "สวัสดีตอนเช้า",
    "Hello World",
    "Good Morning",
    "Good Night",
    "นักโปรแกรมเมอร์อัจฉริยะ",
    "I am rich",
    "สบายดีไหม"
]

btn.addEventListener("click",()=>creatNotification())

function creatNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText = randomMessage()
    container.appendChild(notificationEl) //ใช้สำหรับแทรก element ใดๆ ลงใน element ที่กำหนด โดย element ที่แทรกจะเป็น โหนดลูก (child node) ของ element ที่แทรก 
    setTimeout(()=>{
        notificationEl.remove()
    },3000)
}

function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)] //Math.floor() วิธีการปัดเศษตัวเลขลงให้เป็นจำนวนเต็มที่ใกล้เคียงที่สุด และส่งกลับผลลัพธ์ //Math เป็นออบเจ็กต์ตัวหนึ่ง มีหน้าที่แค่เก็บฟังก์ชันและค่าคงที่ต่างๆเท่านั้น 
}

