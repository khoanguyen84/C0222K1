const key_left = 37;
const key_up = 38;
const key_right = 39;
const key_down = 40;
const spider_width = 60;
const spider_height = 60;
const step = 10;
function buildGame(){
    let spider = document.querySelector(".img-spider");
    spider.src = "images/right.jpg";
    spider.style.width = `${spider_width}px`;
    spider.style.height = `${spider_height}px`;
    spider.style.position = "relative";
    spider.style.left = 0;
    spider.style.top = 0;
    document.addEventListener("keydown", controlSpider)
}
function moveToRight(){
    let spider = document.querySelector(".img-spider");
    if(parseInt(spider.style.left) + spider_width + step< window.innerWidth){
        spider.src = "images/right.jpg";
        spider.style.left = parseInt(spider.style.left) + step + "px";
        spider.style.transition = ".2s";
    }
}
function moveToLeft(){
    let spider = document.querySelector(".img-spider");
    if(parseInt(spider.style.left) > 0){
        spider.src = "images/left.jpg";
        spider.style.left = parseInt(spider.style.left) - step + "px";
        spider.style.transition = ".2s";
    }
}

function moveToDown(){
    let spider = document.querySelector(".img-spider");
    if(parseInt(spider.style.top) + spider_height + step< window.innerHeight){
        spider.src = "images/down.jpg";
        spider.style.top = parseInt(spider.style.top) + step + "px";
        spider.style.transition = ".2s";
    }
}

function moveToUp(){
    let spider = document.querySelector(".img-spider");
    if(parseInt(spider.style.top) > 0){
        spider.src = "images/up.jpg";
        spider.style.top = parseInt(spider.style.top) - step + "px";
        spider.style.transition = ".2s";
    }
}
// ASCII
function controlSpider(e){
    switch (e.keyCode) {
        case key_left:{
            moveToLeft();
            break;
        }
        case key_right:{
            moveToRight();
            break;
        }
        case key_up:{
            moveToUp();
            break;
        }
        case key_down:{
            moveToDown();
            break;
        }
        default:
            alert("Please using 4 arrow keys");
            break;
    }
}
buildGame()