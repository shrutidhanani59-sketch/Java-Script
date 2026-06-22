let images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1020/600/300"
];

let index = 0;

let slide = document.getElementById("slide");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
    index++;

    if(index >= images.length){
        index = 0;
    }

    slide.src = images[index];
});

prevBtn.addEventListener("click", () => {
    index--;

    if(index < 0){
        index = images.length - 1;
    }

    slide.src = images[index];
});