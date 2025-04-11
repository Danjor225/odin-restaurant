import {pageLoadGenerate} from "./page-load.js"
import {loadMenuPage} from "./menu-page.js"

const menuBtn = document.querySelector("#menuBtn")
const bodyContainer = document.querySelector('#content')

pageLoadGenerate()

menuBtn.addEventListener('onclick', () => {
    clearPage()
    loadMenuPage()

})

function clearPage(){

    bodyContainer.textContent = ""

}