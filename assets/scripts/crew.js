import myJson from '../../data.json' assert {type: 'json'}
import { animateOutColumn, animateEnterColumn } from './animate.js'
let crewRole = document.querySelector('.crewJob')
let crewName = document.querySelector('.crewName')
let crewBio = document.querySelector('.crewDescription')
let crewAvatar = document.querySelector('.crewAvatar')

const crew = myJson.crew

let changeCrewBtns = document.querySelectorAll('.crewBtn')

changeCrewBtns.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        for (var i = 0; i < changeCrewBtns.length; i++){
            changeCrewBtns[i].classList.remove('crewBtnActive')
        }
        element.classList.add('crewBtnActive')

        let crewLeft = document.querySelector('.crewDetails')

        animateOutColumnPromise(crewLeft, crewAvatar)
        .then()
        .then(
            setTimeout(() => {
                changeDetailsPromise(index)
            }, 1500)
        )
        crewAvatar.addEventListener('load', () => {
            setTimeout(() => {
                animateEnterColumn(crewLeft, crewAvatar)
              }, 1000)       
        })  
    })
});

function changeDetailsPromise(index){
    return new Promise((resolve) => {
        resolve(changeDetails(index))
    })
}

function changeDetails(index){
    crewRole.innerHTML = crew[index].role.toUpperCase() 
    crewName.innerHTML = crew[index].name.toUpperCase()
    crewBio.innerHTML = crew[index].bio
    crewAvatar.src = crew[index].images.webp
}

function animateOutColumnPromise(left, right){
    return new Promise((resolve) => {
        resolve(animateOutColumn(left, right))
    })
}