function NumeroMayor(matriz) {
  
    let numeroMayor = matriz[0][0]; 
  
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (matriz[i][j] > numeroMayor) {
          numeroMayor = matriz[i][j];
        }
      }
    }
  
    return numeroMayor;
  }
  
  
  const matriz = [
    [5, 8, 2, 4],
    [1, 9, 7, 3],
    [6, 0, 2, 8],
    [2, 5, 3, 1]
  ];
  
  console.log(NumeroMayor(matriz));