import { champs } from '../data/champs.js'

class Champion {
    constructor(name, title){
        this.name = name
        this.title = title
    }
}







const mainContainer = document.querySelector('.container')
mainContainer.className = 'container'



champs.forEach((champs) => { 
let card = document.createElement('div')
    card.className = 'box'
    let figure = document.createElement('figure')
    let name = document.createElement('figcaption')
    let image = document.createElement('img')
    let title = document.createElement('p')
    let newChampions = new Champion('Zoe', 'The Aspect of Twilight')
    
    name.textContent = champs.name
    title.textContent = champs.title
    image.src = champs.url
    figure.appendChild(image)
    figure.appendChild(name)
    figure.appendChild(title)
    card.appendChild(figure)
    mainContainer.appendChild(card)
});  

console.log(newChampions)
  const newChampionButton = document.querySelector('button')

    newChampionButton.addEventListener('click', function(){
       
});
    
// function createLeagueCard(champdata) {
    
// }
// // fetch(champ.url)
// //     .then(function(myJson) {
// //         console.log(myJson)
// //         createLeagueCard(myJson)
// //     });