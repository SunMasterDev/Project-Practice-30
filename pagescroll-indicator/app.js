const progressEl = document.querySelector(".progress")
window.onscroll=()=>scrollProgress()

function scrollProgress(){
    // console.log("เลื่อนดูเนื้อหา");
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight //0 - 1 0 - 100 clientHeight คือความสูงด้านข้าง scrollHeight คือ ล่างและบน padding-top and -bottom
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = (scrollTop/pageHeight)*100
    // console.log(scrollPercentage+"%");
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollPercentage+"%"
}