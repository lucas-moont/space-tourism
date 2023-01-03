import myJson from '../../data.json' assert {type: 'json'}
import { animateOutColumn, animateEnterColumn } from './animate.js'

let techButtons = document.querySelectorAll('.techBtn')
const techActiveClass = 'techBtnActive'
let techName = document.querySelector('.techName')
let techDescription = document.querySelector('.techDescription')
let techAvatar = document.querySelector('.techAvatarDesk')
let techAvatarMobile = document.querySelector('.techAvatarMobile')
const tech = myJson.technology

techButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        for(let i = 0; i < techButtons.length; i++){
            techButtons[i].classList.remove(techActiveClass)
        }
        let techLeft = document.querySelector('.techDetails')
        let techRight = document.querySelector('.secondCol')

        animateOutColumnPromise(techLeft, techRight)
        .then()
        .then(
            setTimeout(() => {
                changeDetailsPromise(index)
            }, 1500)
        )
        
        if (techAvatar.style.display != 'none' || techAvatar.style.display != ''){
            techAvatar.addEventListener('load', () => {
                setTimeout(() => {
                    animateEnterColumn(techLeft, techRight)
                  }, 1000)       
            })  
        }

        if (techAvatarMobile.style.display != 'none' || techAvatarMobile.style.display != ''){
            techAvatar.addEventListener('load', () => {
                setTimeout(() => {
                    animateEnterColumn(techLeft, techRight)
                  }, 1000)       
            })  
        }
        element.classList.add(techActiveClass)
    })
})



function changeDetailsPromise(index){
    return new Promise((resolve) => {
        resolve(changeDetails(index))
    })
}

function changeDetails(index){
    techName.innerHTML = tech[index].name.toUpperCase()
    techDescription.innerHTML = tech[index].description
    techAvatar.src = tech[index].images.portrait
    techAvatarMobile.src = tech[index].images.landscape
}

function animateOutColumnPromise(left, right){
    return new Promise((resolve) => {
        resolve(animateOutColumn(left, right))
    })
}