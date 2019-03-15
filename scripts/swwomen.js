import { people } from '../data/people.js'
import { planets } from '../data/planets.js'



const getLastNumber = url => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

const allHomeWorlds = people.map(person => {
    
    //console.log(getLastNumber(person.url))
    let foundWorld = planets.find( planet => {
        return planet.url === person.homeworld 
    })
    
    let imageURL = getLastNumber(person.url)
    return {
        name: person.name,
        home: foundWorld.name,
        imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`
    }
    
})




const mainContainer = document.querySelector('.container')
mainContainer.className = 'container'

allHomeWorlds.forEach( person => {
   // <div class ="box"></div>
    let personElement = document.createElement('div')
    let planetElement = document.createElement('p')
    let imageElement = document.createElement('img')
    let name = document.createElement('p')
    let birth = document.createElement('p')

    personElement.className = 'box'

    name.textContent = person.name
    birth.textContent = person.birth_year
    planetElement.textContent = person.home
    imageElement.src = person.imagePath

    personElement.appendChild(name)
    personElement.appendChild(birth)
    personElement.appendChild(planetElement)
    personElement.appendChild(imageElement)

    personElement.style.color = person.eye_color

    mainContainer.appendChild(personElement)
    people.filter(person => person.gender === "female");
})

// const foundPlanet = (arr, planet1) => {
//     const foundIt = {}
//     arr.find((element) => {
//        if (element.homeworld === planetUrl) {
//        return element
//     }
//     })
//}

document.body.appendChild(mainContainer)