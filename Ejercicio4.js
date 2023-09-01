const matriz = [
    [1,2,3],
    [8,0,3],
    [2,9,7],
    [3,1,2]
]

const elemento = 3;

function Cantidad (matriz, elemento){
    let cantidad = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] == elemento) {
                cantidad++;
            }
            
        }
    }
    return cantidad;
}

console.log(Cantidad(matriz, elemento))