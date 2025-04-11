const pageContent = document.querySelector("#content")
let headerOneTextContent = "Welcome to the best Restaurant in the world!"
let pageContentsText = [ "What do we serve I hear you ask?", "No food, yep you heard that right. No food", "Instead you can fill youself up on the joy of playing ..."
    ,"BOARD GAMES!", "Find our large array of board games and quench your competitive spirit!"]


function pageLoadGenerate(){
    let headerOneText = document.createElement('h1')
    headerOneText.textContent = headerOneTextContent
    pageContent.appendChild(headerOneText)
 
    pageContentsText.forEach(element => {
         let textBodyContent = document.createElement('div')
         textBodyContent.textContent = element
         pageContent.appendChild(textBodyContent)
    });



}

export{pageLoadGenerate}