import myJson from '../../data.json' assert {type: 'json'}

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
        let destinationData = event.target.getAttribute('data-destination')
        destinationData = destinationData.toUpperCase()
        if(destinationData == 'MARS'){
            destName.innerHTML = destinations[1].name
            destImg.src = destinations[1].images.webp
            destDescription.innerHTML = destinations[1].description
            destDistance.innerHTML = destinations[1].distance
            destTravelTime.innerHTML = destinations[1].travel
        }
    })
})