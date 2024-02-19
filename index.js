let count = 0;

document.getElementById("increase").onclick = function(){
    count++;
    document.getElementById("myh1").textContent = count;
}

document.getElementById("decrease").onclick = function(){
    count--;
    document.getElementById("myh1").textContent = count;
}

document.getElementById("reset").onclick = function(){
    count = 0
    document.getElementById("myh1").textContent = count;
}