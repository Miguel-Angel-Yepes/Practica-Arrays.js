const Matriz = [
    [1,2,3],
    [1,2,3,4],
    [1,2,3]
]

  function MayorLongitud(matriz) {
    let LongitudMayor = matriz[0].length; 
    
    for (let i = 1; i < matriz.length; i++) { 
      if (matriz[i].length > LongitudMayor) {
        LongitudMayor = matriz[i];
      }
    }
  
    return LongitudMayor;
  }
  
  console.log(MayorLongitud(Matriz));