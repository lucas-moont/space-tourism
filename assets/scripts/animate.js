export function animateOutColumn(firstColumn, secondColumn){ 
    firstColumn.classList.remove("enterLeftClass");  
    void firstColumn.offsetWidth;
    firstColumn.classList.add("outRightClass");
    
    secondColumn.classList.remove("enterRightClass");
    void secondColumn.offsetWidth;
    secondColumn.classList.add("outLeftClass");
}

export function animateEnterColumn(firstColumn, secondColumn){
    firstColumn.classList.remove("outRightClass");
    firstColumn.style.animationDuration = '0.5s'  
    firstColumn.style.animationDelay = '0s'
    void firstColumn.offsetWidth;
    firstColumn.classList.add("enterLeftClass");
    
    secondColumn.classList.remove("outLeftClass")
    secondColumn.style.animationDuration = '0.5s'
    secondColumn.style.animationDelay = '0s'
    void secondColumn.offsetWidth
    secondColumn.classList.add('enterRightClass')
}