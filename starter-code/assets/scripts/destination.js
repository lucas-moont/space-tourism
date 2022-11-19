import myJson from '../../data.json' assert {type: 'json'}
import { animateChangeColumns } from './animate.js'


const destinations = myJson.destinations
const destImg = document.querySelector('#destinationImg')
const destName = document.querySelector('#destinationName')
const destDescription = document.querySelector('#destDescription')
const destDistance = document.querySelector('#destDistance')
const destTravelTime = document.querySelector('#destTravelTime')

let destinationsBtns = document.querySelectorAll('.destBtn')

destinationsBtns.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        for (var i = 0; i < destinationsBtns.length; i++){
            destinationsBtns[i].classList.remove('destActive')
        }
        button.classList.add('destActive')
        let destinationData = event.target.getAttribute('data-destination')
        destinationData = destinationData.toUpperCase()
        if(destinationData == 'MOON'){
            destName.innerHTML = destinations[0].name
            destImg.src = destinations[0].images.png
            destDescription.innerHTML = destinations[0].description
            destDistance.innerHTML = destinations[0].distance
            destTravelTime.innerHTML = destinations[0].travel
        }else if(destinationData == 'MARS'){
            destName.innerHTML = destinations[1].name
            destImg.src = destinations[1].images.png
            destDescription.innerHTML = destinations[1].description
            destDistance.innerHTML = destinations[1].distance
            destTravelTime.innerHTML = destinations[1].travel
        }else if(destinationData == 'EUROPA'){
            destName.innerHTML = destinations[2].name
            destImg.src = destinations[2].images.png
            destDescription.innerHTML = destinations[2].description
            destDistance.innerHTML = destinations[2].distance
            destTravelTime.innerHTML = destinations[2].travel
        }else if(destinationData == 'TITAN'){
            destName.innerHTML = destinations[3].name
            destImg.src = destinations[3].images.png
            destDescription.innerHTML = destinations[3].description
            destDistance.innerHTML = destinations[3].distance
            destTravelTime.innerHTML = destinations[3].travel
        }
    })
})

setTimeout(() => {
    animateChangeColumns()
}, 5000);