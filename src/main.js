//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const root = document.querySelector('#root');
root.appendChild(renderItems(data));




//console.log(example, renderItems(data), data);