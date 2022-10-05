import myJson from '../../data.json' assert {type: 'json'}

const destionations = myJson.destinations

document.querySelectorAll('.destBtn').forEach((item, index) => {
    item.addEventListener('click', (event) => {
        let destionation = event.target.getAttribute('data-destination')
        alert(destionation)
    })
})

console.log(destionations)