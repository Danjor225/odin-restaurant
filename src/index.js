import {pageLoadGenerate} from "./page-load.js"
import {loadMenuPage} from "./menu-page.js"

const menuBtn = document.querySelector("#menuBtn")
const bodyContainer = document.querySelector('#content')

pageLoadGenerate()

menuBtn.addEventListener('click', () => {
    clearPage()
    loadMenuPage()

})

function clearPage(){

    bodyContainer.textContent = ""

}