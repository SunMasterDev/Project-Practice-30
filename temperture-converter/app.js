const celciusInput =document.getElementById("celcius")
const fahrenheitInput =document.getElementById("fahrenheit")
const kelvinInput =document.getElementById("kelvin")
const tempInput =document.querySelectorAll("input") //querySelector คือคำสั่งสำหรับเข้าถึง element ตัวแรกที่พบ คำสั่งนี้เหมาะสำหรับการเข้าถึง element ตัวแรกโดยไม่ต้องผ่าน class หรือ id 

tempInput.forEach(input=>{ //forEach ไม่ต้องใส่(ใน input) 
    input.addEventListener("input",(e)=>{
        //ตัวเลขที่ป้อน //parseInt คือแปลงเลขเป็นจำนวนเต็ม
        let tempValue = parseInt(e.target.value) //event.target เป็นการใช้ jQuery Event ใน jQuery Event คือเหตุการณ์ต่าง ๆ ที่ผู้ใช้งานมีต่อเว็บไซต์ว่าได้ทำอะไรไปบ้าง เช่น การคลิก การเลื่อนเมาส์ การดับเบิลคลิก และอื่น ๆ 
        //ชื่อหน่วยอุณหภูมิ
        let inputName =e.target.name

        // console.log("input =",tempValue,"Unite =",inputName);

        if(e.target.value === ""){
            celciusInput.value=null //value JavaScript คือคำสั่งดึงค่าจาก input ชนิดต่างๆ ของ HTML เช่น TextBox, TextArea เป็นต้น
            fahrenheitInput.value=null
            kelvinInput.value=null
            return
        }

        //กระบวนการแปลงอุณหภูมิ
        if(inputName === "celcius"){
            //celcius to fahrenheit
            let fahrenheit = tempValue *1.8 +32
            fahrenheitInput.value = fahrenheit.toFixed(2)//.toFixed() คือ คำสั่งสำหรับการจัดรูปแบบเลขทศนิยมอย่าง่าย (จำนวนทศนิยม)

            //celcius to kevin
            let kelvin = tempValue + 273
            kelvinInput.value = kelvin.toFixed(2)
        
        }else if(inputName === "fahrenheit"){
            //fahrenheit to celcius
            let celcius = (tempValue-32)/1.8 //ใส่วงเล็บ ให้ทำในวงเล็บก่อน
            celciusInput.value = celcius.toFixed(2)

            //fahrenheit to kelvin
            let kelvin = (tempValue-32)/1.8+273 
            kelvinInput.value = kelvin.toFixed(2)
        
        }else if (inputName === "kelvin"){
            //kelvin to celcius
            let celcius = tempValue-273
            celciusInput.value = celcius.toFixed(2)

            //fahrenheit to kelven
            let fahrenheit = (tempValue-273)*1.8+32
            fahrenheitInput.value = fahrenheit.toFixed(2) //toFixed คือการรับค่าทศนิยมกี่จำนวน
        }
    })
})