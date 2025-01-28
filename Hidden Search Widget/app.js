const search = document.querySelector(".search")
const input = document.querySelector(".input")
const btn =document.querySelector(".btn")

btn.addEventListener("click",()=>{
    search.classList.toggle("active") //toggle() คือ คำสั่งของ jQuery ในหมวดของ Effects มีไว้สำหรับการแสดง และการซ้อน Elements ที่ต้องการ
    input.focus() // .focus() คือชี้ตำแหน่งไปยังวัตถุที่ต้องการครับ
})