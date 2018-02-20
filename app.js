//1 ) Crea tu propia función forEach que funcione igual a Array.forEach.

function miForEach(arreglo, llamada){
    for(i=0;i<arreglo.length;i++){       //Itera el arreglo
  arreglo[i]=arreglo[i];  
}
console.log(arreglo);
}

miForEach([0,1,2,3,4,5], function(){});


// 2 ) Crea tu propia función map que funcione igual a Array.map.

function miMap(arreglo, llamada){
    var newArray=[];
    for(i=0;i<arreglo.length;i++){
      newArray.push(arreglo[i]);
    }
    console.log(newArray);
  }
      miMap([0,1,2,3,4,5], function(){});
  