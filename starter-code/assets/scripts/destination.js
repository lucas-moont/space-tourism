document.querySelectorAll('.destBtn').forEach((item, index) => {
    item.addEventListener('click', (event) => {
        let destionation = event.target.getAttribute('data-destination')
        alert(destionation)
    })
})