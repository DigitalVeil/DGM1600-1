import { champs } from '../data/champs.js'

console.log(champs)
const mainContainer = document.querySelector('.container')
mainContainer.className = 'container'

champs.forEach((champs) => { 
let card = document.createElement('div')
    card.className = 'box'
    let name = document.createElement('figcaption')
    let image = document.createElement('img')
    let title = document.createElement('p')
    
    
    name.textContent = champs.name
    title.textContent = champs.title
    image.src = champs.url
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(title)
    mainContainer.appendChild(card)
  

// function createLeagueCard(champdata) {
    
// }
// // fetch(champ.url)
// //     .then(function(myJson) {
// //         console.log(myJson)
// //         createLeagueCard(myJson)
// //     });
})