import { champs } from '../data/champs.js'

champs.forEach((champ) => {
fetch('http://ddragon.leagueoflegends.com/cdn/9.7.1/data/en_US/champion/Aatrox.json')
    .then(function(response){
        return response.json()
    })
    .then(function(myJson) {
        console.log(myJson)
        createLeagueCard(myJson)
    });
})


    console.log(champs)

const mainContainer = document.querySelector('.container')

function createLeagueCard(champdata) {
    let card = document.createElement('div')
    let name = document.createElement('p')
    let image = document.createElement('img')

    name.textContent = champdata.name
    image.src = champdata.url
    card.appendChild(name)
    mainContainer.appendChild(card)
}