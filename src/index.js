import {pageLoadGenerate} from "./page-load.js"
import {loadMenuPage} from "./menu-page.js"
import {loadAboutPage} from "./about-page.js"

const homeBtn = document.querySelector("#homeBtn")
const menuBtn = document.querySelector("#menuBtn")
const aboutBtn = document.querySelector('#aboutBtn')

const bodyContainer = document.querySelector('#content')

pageLoadGenerate()

homeBtn.addEventListener('click', () => {
    clearPage()
    pageLoadGenerate()
})

menuBtn.addEventListener('click', () => {
    clearPage()
    loadMenuPage()

})

aboutBtn.addEventListener('click', () => {
    clearPage()
    loadAboutPage()
})



function clearPage(){

    bodyContainer.textContent = ""

}