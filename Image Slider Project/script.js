const img = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

var index = 0;

document.querySelector(".rightBtn").onclick = function () {

    index++;
    if (index >= img.length) {
        index=0;
    }
        document.querySelector('img').attributes.src.value = `${img[index]}`

};

document.querySelector(".leftBtn").onclick = function () {

    index--;
        document.querySelector('img').attributes.src.value = `${img[index]}`

    if (index <0 ) {
        index = img.length-1;

    }
    document.querySelector('img').src = img[index];

};
