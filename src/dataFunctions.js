/*Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
}; */

export const filterData = (data, filterBy, value) => {
  console.log(data)
  console.log(filterBy)
  console.log(value)

}

export const orderData = (data, sortBy, sortOrder) => {
  console.log(data)
  console.log(sortBy)
  console.log(sortOrder)

}

/*
- Crear constante de función "sortBy" que tiene 3 parámetros (data, sortBy, sortOrder) 
- Declarar sortBy qué significa orden ascendente y/o descendente con operadores lógicos.
- Recorrer arreglo con forEach?
- Por cada objeto, coger el Id.
- Comparar por lo que definimos como sortBy, según la primera letra (índice 0) del nombre.
- Pushear objetos a un nuevo array que:
  - Ordene ascendentemente según el primer índice del nombre
  - Ordene descendentemente según lo anterior
- Devuelve función con el arreglo ordenado.
*/