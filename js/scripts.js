const imgCarosello = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
const btnRight = document.getElementById("arrow-right");
const btnLeft = document.getElementById("arrow-left");
let currentImg = 1;

console.log(currentImg);

btnRight.addEventListener("click", avanti);
function avanti() {
    
    imgCarosello[currentImg++]

    console.log(currentImg);
    
    if (currentImg > 5) {
        
        currentImg = 1;
        
    }

    document.getElementById("immagine").src = "img/0" + currentImg + ".webp";
}

btnLeft.addEventListener("click", indietro);
function indietro() {     
    
    imgCarosello[currentImg--]

    if (currentImg < 1) {
        
        currentImg = 5;
        
    }

    document.getElementById("immagine").src = "img/0" + currentImg + ".webp";
    
    console.log(currentImg);
    
} 
    
