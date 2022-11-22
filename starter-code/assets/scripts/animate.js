export function animateOutColumn(firstColumn, secondColumn){ 
    firstColumn.classList.remove("enterLeftClass");  
    void firstColumn.offsetWidth;
    firstColumn.classList.add("outRightClass");
}