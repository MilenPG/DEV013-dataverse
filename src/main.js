//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData, sortData} from './dataFunctions.js';

const selectOrder = document.getElementById('order');
const selectFilter = document.getElementById('filter');

const root = document.querySelector('#root');
root.appendChild(renderItems(data));

//console.log(example, renderItems(data), data);
const filter = document.querySelector('#filter');
filter.addEventListener('change', () => {
  root.innerHTML= "";
  const datafilter = filterData (data, 'conservationStatus', filter.value)
  root.appendChild(renderItems(datafilter));
})

const order = document.querySelector('#order');
order.addEventListener('change', () => {
  root.innerHTML= "";
  const datasort = sortData (data, 'name', order.value)
  root.appendChild(renderItems(datasort));
})

const clean = document.querySelector('#reset-button');
clean.addEventListener('click', () => {
  selectOrder.selectedIndex = "";
  selectFilter.selectedIndex = "";
  root.innerHTML= "";
  root.appendChild(renderItems(data));

})

/*const search = document.querySelector('#search');
search.addEventListener('keyup', e => {
  if (e.target.matches("birdData.name")){
    document.querySelectorAll ()
  }
  //console.log(e.target.value);
})*/
