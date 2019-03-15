import { people } from '../data/people.js'

const women = people.filter(person => person.gender === "female");

console.log(women)