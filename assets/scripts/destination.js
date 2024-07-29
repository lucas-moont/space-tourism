import { animateOutColumn, animateEnterColumn } from "./animate.js";
import { getJsonData } from "./getJsonData.js";

const myJson = await getJsonData()
console.log(myJson)

const destinations = myJson.destinations;
const destImg = document.querySelector("#destinationImg");
const destName = document.querySelector("#destinationName");
const destDescription = document.querySelector("#destDescription");
const destDistance = document.querySelector("#destDistance");
const destTravelTime = document.querySelector("#destTravelTime");
const firstCol = document.querySelector(".destImgHolder");
const secondCol = document.querySelector(".destionationDetailsWrapper");
let destinationsBtns = document.querySelectorAll(".destBtn");

destinationsBtns.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    for (var i = 0; i < destinationsBtns.length; i++) {
      destinationsBtns[i].classList.remove("destActive");
    }
    button.classList.add("destActive");
    let destinationData = event.target.getAttribute("data-destination");
    destinationData = destinationData.toUpperCase();
    animateOutColumnPromise(firstCol, secondCol)
      .then()
      .then(
        setTimeout(() => {
          changeDetailsPromise(index);
        }, 1500)
      );
    destImg.addEventListener("load", () => {
      animateEnterColumn(firstCol, secondCol);
    });
  });
});

function changeDetailsPromise(index) {
  return new Promise((resolve) => {
    resolve(changeDetails(index));
  });
}

function changeDetails(index) {
  destName.innerHTML = destinations[index].name;
  destImg.src = destinations[index].images.png;
  destDescription.innerHTML = destinations[index].description;
  destDistance.innerHTML = destinations[index].distance;
  destTravelTime.innerHTML = destinations[index].travel;
}

function animateOutColumnPromise(left, right) {
  return new Promise((resolve) => {
    resolve(animateOutColumn(left, right));
  });
}
