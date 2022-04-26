
/*
function CalcularMediaAritmetica(lista){
let sumaLista = 0;
for (let i=0; i< lista.length;i++){
    sumaLista = sumaLista + lista[i]
}
const PromedioLista = sumaLista/lista.length;
return PromedioLista;

}
*/
//Media Aritmetica
function CalcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }

    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Mediana

  
  
  const mitadLista = parseInt(lista.length / 2);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(lista.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
  
    const promedioElemento = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento;
  } else {
    mediana = lista1[mitadLista1];
  }
 
  //moda
const listaCount = {};

lista1.map(
  function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }
);

const lista1Array = Object.entries(listaCount).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];