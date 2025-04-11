const pageContent = document.querySelector("#content")
let menuPageText = [ "Option 1: Board Game 1", "Option 2: Board Game 2", "Option 3: Board Game 3"]

function loadMenuPage(){

    
 
    menuPageText.forEach(element => {
         let textBodyContent = document.createElement('div')
         textBodyContent.textContent = element
         pageContent.appendChild(textBodyContent)
    });

}

export {loadMenuPage}