import {pageLoadGenerate} from "./page-load.js"
import {loadMenuPage} from "./menu-page.js"
import {loadAboutPage} from "./about-page.js"

const homeBtn = document.querySelector("#homeBtn")
const menuBtn = document.querySelector("#menuBtn")
const aboutBtn = document.querySelector('#aboutBtn')
const buttons = document.querySelectorAll(".buttons")
const bodyContainer = document.querySelector('#content')

pageLoadGenerate()

homeBtn.addEventListener('click', () => {
    pageLoadGenerate()
})

menuBtn.addEventListener('click', () => {
    
    loadMenuPage()

})

aboutBtn.addEventListener('click', () => {

    loadAboutPage()
})

buttons.addEventListener("click", () => {

    clearPage()
})

function clearPage(){

    bodyContainer.textContent = ""

}