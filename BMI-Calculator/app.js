const btn =document.querySelector(".btn")  
//อ้างอิงไปยัง class btn
const result =document.querySelector(".result")  
//อ้างอิงไปยัง class result 

//ดักจับ event คือ (e)
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let weight =document.getElementById("weight").value //.value คือการดึงเอาค่ามาใช้
    let height =document.getElementById("height").value
    
    if(weight === "" || isNaN(weight)){ // || (หรือ) //เป็น operator //isnan. ฟังก์ชั่น isnan เป็นฟังก์ชั่นตรวจสอบว่าค่าของตัวแปรเป็นตัวเลขตัวเลขหรือไม่ 
        return result.innerHTML ="กรุณาป้อนน้ำหนักของคุณ" 
    }else if (height ==="" || isNaN(height)){
        return result.innerHTML ="กรุณาป้อนส่วนสูงของคุณ" 
    }else{
        // return result.innerHTML ="ข้อมูลถูกต้อง" // ส่งค่ากลับไปยัง result .ใน html =
        //cm => m
        height = height/100 //ตัวแปร height mที่สร้างไว้แล้วเลยไม่มี let
        let bmi = (weight/Math.pow(height,2)).toFixed(2) //math.pow(x, y) คืนค่าผลลัพธ์ที่ได้จากการที่ x ยกกำลัง y 
        //วิธีที่ 2 สามารถใช้ height * height ได้ มีหลายวิธี //toFix ดึงค่าทศนิยมมา 2 ตัว เพราะ ตัวเลมีค่าหน่วยทศนิยมทุกตัว

        //บอกเกณฑ์
        if(bmi<18.5){
            showResult(bmi,"ผอมเกินไป","blue")
            // return result.innerHTML =`ผลลัพธ์ = ${bmi} {ผอมเกินไป}` //``เขียน string ร่วมกับตัวแปร
        }else if(bmi>=18.5 && bmi<=24.9){ //&& และ 
            showResult(bmi,"ปกติ","green")    
        }else if(bmi>=25 && bmi<=29.9){
            showResult(bmi,"อ้วน","red")
        }else{
            showResult(bmi,"อ้วนเกินไป","purple")
        }
    }
})

function showResult(bmi,message,color){
    result.style.backgroundColor = color //เปลี่ยน style
    return result.innerHTML =`ผลลัพธ์ = ${bmi} {${message}}`
}