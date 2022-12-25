import myJson from '../../data.json' assert {type: 'json'}
import { animateOutColumn, animateEnterColumn } from './animate.js'

let techButtons = document.querySelectorAll('.techBtn')
const techActiveClass = 'techBtnActive'
let techName = document.querySelector('.techName')
let techDescription = document.querySelector('.techDescription')
let techAvatar = document.querySelector('.techAvatarDesk')

const tech = myJson.technology

techButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        for(let i = 0; i < techButtons.length; i++){
            techButtons[i].classList.remove(techActiveClass)
        }
        let techLeft = document.querySelector('.techDetails')
        let techRight = document.querySelector('.secondCol')

        animateOutColumn(techLeft, techRight)

        setTimeout(() => {
            techName.innerHTML = tech[index].name.toUpperCase()
            techDescription.innerHTML = tech[index].description
            techAvatar.src = tech[index].images.portrait
            animateEnterColumn(techLeft, techRight)
        }, 1500);

        element.classList.add(techActiveClass)
    })
})