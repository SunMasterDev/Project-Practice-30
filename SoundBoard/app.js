const sounds =["Effect1","Effect2","Effect3","Effect4","Effect5"] //ชื่อของไฟล์เสียง

sounds.forEach(sound=>{
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerText= sound //innerText เป็นคำสั่งที่ใช้แทรก ข้อความ ลงในตำแหน่งที่ต้องการ
    btn.addEventListener("click",()=>{ //Arrow Function คือการสร้างฟังก์ชันรูปแบบใหม่ที่สั้นกระชับกว่าเดิม
        stopSounds()
        document.getElementById(sound).play()
    })
    document.getElementById("controller").appendChild(btn)//.appedchid() คือแทรก element เข้าไปใน node ลูก
})

function stopSounds(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound)
        song.pause()
        song.currenTime = 0
    })
}