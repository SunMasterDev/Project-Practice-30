const smallImg = document.querySelectorAll(".gallery img")
const fullImg =document.querySelector(".full-img")
const popUp =document.querySelector(".popup")

smallImg.forEach(img=>{
    img.addEventListener("click",()=>{
        const fullSize = img.getAttribute("alt")
        const path = `foods-images/foods-images/full/${fullSize}.jpg`
        fullImg.src = path
        popUp.classList.add("open")
    })
})

popUp.addEventListener("click",(e)=>{
    if(e.target.classList.contains("popup")){ //ระวังชื่อ class กับ ชื่อ function
        popUp.classList.remove("open")
    }
})