// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};

export const filterData = (data, filterBy, value) => {
  if (value === "preocupacion-menor"){
    const filterDataConservation = data.filter (bird => bird.facts.conservationStatus === "Preocupación menor")
    return filterDataConservation
  } else if (value === "casi-amenazado"){
    const filterDataConservation = data.filter (bird => bird.facts.conservationStatus === "Vulnerable")
    return filterDataConservation
  } else if (value === "vulnerable"){
    const filterDataConservation = data.filter (bird => bird.facts.conservationStatus === "En peligro")
    return filterDataConservation
  }
}

export const sortData = (data, orderBy, value) => {
  const copyData = [...data];
  const sortedData = copyData.sort ((a, b) => {
    if (value ==='asc'){
      return a[orderBy].localeCompare(b[orderBy])   
    } else {
      return b[orderBy].localeCompare(a[orderBy])   
    }  
  }) 
  console.log(sortedData)
  return sortedData;
}

/*- Crear constante de función "sortBy" que tiene 3 parámetros (data, sortBy, sortOrder) 
- Declarar sortBy qué significa orden ascendente y/o descendente con operadores lógicos.
- Recorrer arreglo con forEach
- Por cada objeto, coger el Id.
- Comparar por lo que definimos como sortBy, según la primera letra (índice 0) del nombre.
- Pushear objetos a un nuevo array que:
  - Ordene ascendentemente según el primer índice del nombre
  - Ordene descendentemente según lo anterior
- Devuelve función con el arreglo ordenado.
*/


