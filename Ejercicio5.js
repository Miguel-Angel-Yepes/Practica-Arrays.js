const Array = [1,2,3];
const Array2 = [1,2,3,4];

function SumaArrays (array1,array2){
    let arrayResultante = [];
    let longitud;
    let espacios;

    if (array1.length<array2.length) {
        longitud = array2.length;
        espacios = array2.length - array1.length;
        for (let i = 0; i < espacios; i++) {
            array1.push(0);
            
        }
    }

    if (array2.length<array1.length) {
        longitud = array1.length;
        espacios = array1.length - array2.length;
        for (let i = 0; i < espacios; i++) {
            array2.push(0);
        }
    }



    for (let i = 0; i < longitud; i++) {
        valor1 = array1[i];
        valor2 = array2[i];
        arrayResultante.push(valor1 + valor2)  
    }

    return arrayResultante;
}

console.log(SumaArrays(Array, Array2));
