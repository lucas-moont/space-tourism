import myJson from '../../data.json' assert {type: 'json'}

const destinations = myJson.destinations
const destImg = document.querySelector('#destinationImg')
const destName = document.querySelector('#destinationName')
const destDescription = document.querySelector('#destDescription')

document.querySelectorAll('.destBtn').forEach((item, index) => {
    item.addEventListener('click', (event) => {
        let destionationData = event.target.getAttribute('data-destination')
        destionationData = destionationData.toUpperCase()
        if(destionationData == 'MARS'){
            destName.innerHTML = destinations[1].name
            destImg.src = destinations[1].images.webp
            destDescription.innerHTML = destinations[1].description
        }
    })
})

console.log(destinations[1].name)