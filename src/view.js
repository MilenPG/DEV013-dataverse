export const renderItems = (data) => {
  
  const birdData = data;
  const cardsContainer= document.createElement('ul')
  for (let i=0; i<birdData.length; i++) {
    const li = document.createElement('li');
    li.innerHTML= 
    ` 
     <img= alt=>
     <p1>${birdData[i].name}</p>
     `; //uso interpolación de cadenas para estructurar bien el HTML

    li.setAttribute('itemscope', '') // se renderizará (visualizará en html): <li itemscope=''>
    li.setAttribute('itemtype', 'avesDeLatam') // se renderizará (visualizará en html): <li itemtype='avesDeLatam'>
    li.className= 'card'
    cardsContainer.appendChild(li)
  }
  return cardsContainer;
};