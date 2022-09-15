// Import stylesheets
import './style.css';
import { Person } from './Person';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

//#################################################################

let p0 = new Person('Karol', 19);
console.log(p0.getIdade());

appDiv.innerHTML = `<h1>${p0.getName()} tem ${p0.getIdade()} anos</h1>`;
