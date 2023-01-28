let open = document.querySelector(".open");
let close = document.querySelector(".close");
let container = document.querySelector(".container");

open.onclick = function(){
    container.style.transform = "rotateZ(0deg)";
    this.style.visibility = "hidden";
    close.style.visibility = "visible";
}

close.onclick = function(){
    container.style.transform = "rotateZ(60deg)";
    this.style.visibility = "hidden";
    open.style.visibility = "visible";
}