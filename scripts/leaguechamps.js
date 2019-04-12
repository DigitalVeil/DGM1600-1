import { champs } from '../data/champs.js'

const mainContainer = document.querySelector('.container')
mainContainer.className = 'container'

class Champion {
    constructor(name, title){
        this.name = name
        this.title = title
    }
}

let newChampions = new Champion('Zoe', 'The Aspect of Twilight')

function cardFront(champs){
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face'
    let figure = document.createElement('figure')
    let name = document.createElement('figcaption')
    let image = document.createElement('img')
    let title = document.createElement('p')
   
    name.textContent = champs.name
    title.textContent = champs.title
    image.src = champs.url
    figure.appendChild(image)
    figure.appendChild(name)
    figure.appendChild(title)
    cardFront.appendChild(figure)
    return cardFront
}

function cardBackInfo(champs){
    let infoDiv = document.createElement('div')
    let champClass = document.createElement('p')
    let champDifficulty = document.createElement('p')
    let champRarity = document.createElement('p')

    champClass.textContent = champs.class
    champDifficulty.textContent = "Difficulty :"
    champRarity.textContent = ("Difficulty: ", + champs.difficulty)

    
    infoDiv.appendChild(champClass)
    infoDiv.appendChild(champDifficulty)
    infoDiv.appendChild(champRarity)
    return infoDiv
}

function cardBack(champs){
    let cardBack = document.createElement('div')
    let backImage = document.createElement('img')
    backImage.src = `../jpg/League.png`
    cardBack.className = 'card__face card__face--back'

    cardBack.appendChild(backImage)
    cardBack.appendChild(cardBackInfo(champs))
    return cardBack
}

function newBack(Champion){
    let newBack = document.createElement('div')
    let backImage = document.createElement('img')
    backImage.src = `../jpg/League.png`
    cardBack.className = 'card__face card__face--back'

    newBack.appendChild(backImage)
    cardBack.appendChild(cardBackInfo(champs))
    return cardBack
}

champs.forEach((champs) => { 
    let scene = document.createElement('div')
    scene.className = 'scene'
    let card = document.createElement('div')
    card.className = 'card'

    card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

    card.appendChild(cardFront(champs))
    card.appendChild(cardBack(champs))
    scene.appendChild(card)
    mainContainer.appendChild(scene)
});  

function createNewChampion(Champion){
    let card = document.createElement('div')
    card.className = 'box'
    let figure = document.createElement('figure')
    let name = document.createElement('figcaption')
    let image = document.createElement('img')
    let title = document.createElement('p')

    card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
   
    name.textContent = Champion.name
    title.textContent = Champion.title
    image.src = `../jpg/League.png`
    figure.appendChild(image)
    figure.appendChild(name)
    figure.appendChild(title)
    card.appendChild(figure)
    mainContainer.appendChild(card)
}
  const newChampionButton = document.querySelector('button')

    newChampionButton.addEventListener('click', function(){
        let newChampion = prompt('Enter Name of your champion!')
       createNewChampion(new Champion('Zoe', 'The Aspect of Twilight'))
});

// function createLeagueCard(champdata) {
    
// }
// // fetch(champ.url)
// //     .then(function(myJson) {
// //         console.log(myJson)
// //         createLeagueCard(myJson)
// //     }); 

// let figure = document.createElement('figure')
    // let name = document.createElement('figcaption')
    // let image = document.createElement('img')
    // let title = document.createElement('p')
   
    
    // name.textContent = champs.name
    // title.textContent = champs.title
    // image.src = champs.url
    // figure.appendChild(image)
    // figure.appendChild(name)
    // figure.appendChild(title)
    // card.appendChild(figure)