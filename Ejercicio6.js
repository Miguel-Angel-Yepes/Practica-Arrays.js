const Array = [6];
contador=0
function CuentaRegresiva (NumeroInicial){
    while (NumeroInicial[contador]>=1) {
        if (NumeroInicial[contador]>=1) {
            cap = NumeroInicial[contador]-1
            NumeroInicial.push(cap)
        }
        contador++
    }
    return NumeroInicial;
}

console.log(CuentaRegresiva(Array))

