//HackerRank challenge 04 Sparse Arrays
/* 
There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. 
Return an array of the results. 
*/

function matchingStrings(strings, queries) {
  let result = [];

  queries.forEach((query) => {
    let count = 0;
    for (const string of strings) {
      if (string === query) {
        count++;
      }
    }
    result.push(count);
  });

  return result;
}

console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);

//pegar cada query do array de queries (forEach)
//contar ocorrência da query no array de strings (for  of)
//armazenar a ocorrência de cada query num array (result.push(count))
