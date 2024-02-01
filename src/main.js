import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData, orderData } from './dataFunctions.js';

const root = document.querySelector('#root');
root.appendChild(renderItems(data));

//llamado función filter:
const filter=document.querySelector('#filter')
filter.addEventListener('change',()=> { //dentro del paréntesis podemos recibir el objeto "event" o "e"
  //console.log(filter.value) // ...con "e" + ".target" nos retornaría exactamente lo mismo. (BUSCAR "TARGET") 
  filterData(data, 'conservationStatus', filter.value)
  console.log(filterData)
})

//llamado función order
const order=document.getElementById('order')
order.addEventListener('change', (e)=> {
  orderData(data, 'id', e.target.value)  
  console.log(orderData)
})