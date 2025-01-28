const container = document.getElementById("container") //ถ้าเป็น get ไม่ต้องใส่ # หรือ .
//await ใช้เพื่อบอกให้ JavaScript รอจนกว่าคำสั่งนั้นจะเสร็จ ถึงค่อยไปทำงานอันต่อไป โดยฟังก์ชันที่จะมี await อยู่ข้างในได้ต้องประกาศเป็น async เสมอ
const getCountries=async()=>{ //arrow function ()=>{} ฟังก์ชั่นแบบสั้น //method ใส่()ตามหลัง //เรียกใช้ฟังก์ชั่น ชื่อฟังก์ชั่นตามด้วย ()
    const url='https://restcountries.com/v2/all' //ตำแหน่งที่ไปดึงข้อมูล
    const res = await fetch(url) //await คือต้องรอข้อมูลให้ครบก่อน // fetch() เป็น method ที่ให้เราสามารถ รับ-ส่ง ข้อมูล (HTTP Request) ระหว่างเว็บได้จากเว็บบราวเซอร์
    const item = await res.json() //จัด format เป็นรูปแบบ json()
    item.forEach(element => { 
        // console.log("ชื่อ = ",element.name,"เมืองหลวง = ",element.capital); //การคัดกรองข้อมูล ใช้ item.forEach()
        creatCard(element)
    });
}

const creatCard =(data)=>{
    const cardEl = document.createElement("div")
    cardEl.classList.add("country")
    const contentHTML = ` 
        <div class="img-container">
            <img src="${data.flag}"/>
        </div> 
        <div class="info">
            <h3 class="name">${data.name}</h3>
            <small>เมืองหลวง : <span>${data.capital}</span></small> 
        </div> 
    ` //คำสั่งลดขนาดตัวอักษรลง 1 ระดับ คำสั่ง < SMALL >
    cardEl.innerHTML=contentHTML
    container.appendChild(cardEl) //d ใช้สำหรับ*แทรก* element ใดๆ ลงใน element ที่กำหนด โดย element ที่แทรกจะเป็น โหนดลูก (child node)
}

getCountries()