//HackerRank challenge 05 Lonely Integer
//Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
  let count = {};
  let lonelyInteger = 0;
  for (let i = 0; i < a.length; i++) {
    let number = a[i];
    if (count[number]) {
      count[number]++;
    } else {
      count[number] = 1;
    }
  }
  for (const property in count) {
    if (count[property] === 1) {
      lonelyInteger = property;
    }
  }
  return lonelyInteger;
}

const arr = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(arr));
//4

//contar a ocorrência de cada número no array: dentro do loop uma variable number indicando o número iterado
//se esse number existir no objeto vazio (é pq já foi iterado uma vez), adicionaremos +1, indicando que ele já foi contado no array
//se não existir, atribuiremos o valor 1 para ele, dizendo que só foi iterado uma única vez
//iteramos as propriedades do objeto e verificamos qual propriedade ao ser acessada tem value === 1
//armazenamos a propriedade num variável e a retornamos
