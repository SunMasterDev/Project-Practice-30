const result = document.getElementById("result")
const filter =document.getElementById("filter")
const listItem = [] //สร้างเพื่อกรอง array

filter.addEventListener("input",(e)=>{
    // thailand => thailand //toLowerCase() ทำให้ thailand ที่ค้นหาเป็นตัวพิมเล็กเหมือนกัน
    const search = e.target.value.toLowerCase() //.target คือสิ่งผู้ใช้งานทำงาน .value คือค่าที่ทำงาน .toLowerCase() function ทำให้ตัวพิมเล็กทั้งหมด
    listItem.forEach(item=>{
        if(item.innerText.toLowerCase().includes(search)){//.includes() function ส่งผลออกมา true กับ false //.includes JavaScript คือคำสั่งค้นหาข้อมูล โดยรองรับการค้นหาข้อมูลจาก string และค้นหาข้อมูลจาก array
            //แสดงรายการ
            item.classList.remove("hide") //classList
        }else{
            //ซ่อนรายการไม่เกี่ยวข้อง
            item.classList.add("hide")//classList
        }
    })
})//addEventListener ใส่("")

async function getData(){ //ไม่ประกาศตัวแปร ใช้ async ด้านหน้าได้เลย
    const url = "https://restcountries.com/v2/all"
    const response = await fetch(url) //fectch(ใส่ตัวที่จะดึงข้อมูล) = เป็น method รับ-ส่ง ข้อมูล
    const item = await response.json() //method json() คือการแปลงให้เป็นรูปแบบ  json
    result.innerHTML ="" // "" คือค่าว่าง
    item.forEach(data => {
        const li = document.createElement("li")//สร้าง li ตามจำนวนไอเทม
        listItem.push(li) //.push() method การยัดข้อมูล
        li.innerHTML=`
        <img src="${data.flag}">
        <div class="info">
            <h4>${data.name}</h4>
            <p>${formatNumber(data.population)}</p>
        </div>
        `
        result.appendChild(li)
        
    });
}
//ฟังก์ชั่นจัดรูปแบบการแสดงผลตัวเลข*******
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

}

getData() //การเรียกใช้ Function()
