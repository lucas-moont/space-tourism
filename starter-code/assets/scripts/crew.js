import myJson from '../../data.json' assert {type: 'json'}
import { animateOutColumn, animateEnterColumn } from './animate.js'


const crew = myJson.crew

let changeCrewBtns = document.querySelectorAll('.crewBtn')

changeCrewBtns.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        for (var i = 0; i < changeCrewBtns.length; i++){
            changeCrewBtns[i].classList.remove('crewBtnActive')
        }
        element.classList.add('crewBtnActive')
        let crewRole = document.querySelector('.crewJob')
        let crewName = document.querySelector('.crewName')
        let crewBio = document.querySelector('.crewDescription')
        let crewAvatar = document.querySelector('.crewAvatar')

        crewRole.innerHTML = crew[index].role.toUpperCase() 
        crewName.innerHTML = crew[index].name.toUpperCase()
        crewBio.innerHTML = crew[index].bio
        crewAvatar.src = crew[index].images.webp

    })
});