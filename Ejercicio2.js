
function esMatrizCuadrada(matriz) {
    const filas = matriz.length;
    
    for (let i = 0; i < filas; i++) {
      if (matriz[i].length !== filas) {
        return false; 
      }
    }
    
    return true;
  }
  
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(esMatrizCuadrada(matriz));