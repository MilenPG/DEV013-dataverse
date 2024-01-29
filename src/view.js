export const renderItems = (data) => {
  
  const birdData = data;
  const cardsContainer= document.createElement('ul')
  for (let i=0; i<birdData.length; i++) {
    const li = document.createElement('li');
    li.innerHTML= `
      <div class='imgAndName'>
        <img class='cardImg' src='${birdData[i].imageUrl}' alt="fotografía de '${birdData[i].name}'">
        <p1>${birdData[i].name}</p>
        <p2>${birdData[i].facts.scientificName}</p>
      </div>
      <ul class= 'birdFacts'>
        <li>Hábitat: ${birdData[i].facts.birdHabitat}</li>
        <li>Tamaño: ${birdData[i].facts.birdLength}</li>
        <li>Estado de conservación: ${birdData[i].facts.conservationStatus}</li>
      </ul> 
    `
    /* <div class= 'birdFacts'>
      <p1>${birdData[i].facts.birdHabitat}</p>
      <p2>${birdData[i].facts.birdLength}</p>
      <p3>${birdData[i].facts.conservationStatus}</p>
     </div> 
     `; //uso interpolación de cadenas para estructurar bien el HTML*/

    li.setAttribute('itemscope', '') // se renderizará (visualizará en html): <li itemscope=''>
    li.setAttribute('itemtype', 'avesDeLatam') // se renderizará (visualizará en html): <li itemtype='avesDeLatam'>
    li.className= 'card'
    cardsContainer.appendChild(li)
  }
  return cardsContainer;
};