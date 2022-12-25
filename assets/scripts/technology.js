import myJson from '../../data.json' assert {type: 'json'}
import { animateOutColumn, animateEnterColumn } from './animate.js'

let techButtons = document.querySelectorAll('.techBtn')
const techActiveClass = 'techBtnActive'
let techName = document.querySelector('.techName')
let techDescription = document.querySelector('.techDescription')
let techAvatar = document.querySelector('.techAvatar')

const tech = myJson.tech

techButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        for(let i = 0; i < techButtons.length; i++){
            techButtons[i].classList.remove(techActiveClass)
        }

        element.classList.add(techActiveClass)
    })
})