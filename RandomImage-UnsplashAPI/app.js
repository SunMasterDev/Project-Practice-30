const container = document.querySelector(".container")
const rows = 4 //แถว
const cols = 3 //ช่อง

function randomNuber(){
    return Math.floor(Math.random()*500) //Math.floor() คือการปัดเป็นจำนวนเต็มที่ใกล้เคียงที่สุด //เอาไปคูณ ทำให้เป็นเลข 0-10 ตามที่เอาไปคูณ
}

for(let i = 0;i<rows*cols;i++){
    //link
    const url = `https://source.unsplash.com/random/${randomNuber()}` //การใช้ลิงค์แบบไม่ต้องเชื่อม${}
    //พื้นที่แสดงภาพ
    const imageEl = document.createElement("img")
    imageEl.src = url //.src method ใช้สำหรับดึงรูปภาพ
    container.appendChild(imageEl) //ยัดเข้าไปใน container ใช้ function() .appendChild
}