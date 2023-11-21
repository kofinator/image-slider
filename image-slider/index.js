const nextEl = document.querySelector(".next");
const imageContainer = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");
const prevEl = document.querySelector(".prev");
let currentImg = 1;
let timeout;
nextEl.addEventListener("click", () =>{
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});
prevEl.addEventListener("click", () =>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})
function updateImg() {
    if(currentImg > imgsEl.length) {
        currentImg = 1;
    }else if(currentImg < 1) {
        currentImg = imgsEl.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

    timeout = setTimeout(()=>{
        currentImg++;
        updateImg();

    }, 3000);

}