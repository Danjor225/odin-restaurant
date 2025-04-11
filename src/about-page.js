const pageContent = document.querySelector('#content')

let aboutPageText = [ "The Coolest Restaurant event as rated by noone", "Because we don't sell food", "but instead the greatest sustience of all time.", "Based in middle of london", 
    "most unique restaurant experience in the world"
]

export function loadAboutPage(){


    aboutPageText.forEach(element => {
        let textBodyContent = document.createElement('div')
        textBodyContent.textContent = element
        pageContent.appendChild(textBodyContent)
   });

}