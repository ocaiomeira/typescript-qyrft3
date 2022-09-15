// Import stylesheets
import './style.css';
import { Person } from './Person';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

//#################################################################
let x: number = 30;
let p0 = new Person('Karol', 19);
let p1 = new Person('Karol', 19);
let p2 = new Person('Karol', 19);
let p3 = new Person('Karol', 19);

appDiv.innerHTML = `<h1>${p0.getName()} tem ${p0.getIdade()} anos</h1>`;
