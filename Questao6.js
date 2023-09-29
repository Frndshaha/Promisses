const frutas = ['Caqui', 'Banana', 'Caju', 'Melão', 'Uva'];

function FrutasComM(frutas) {
  return new Promise((resolve, reject) => {
    const frutaComM = frutas.find(fruta => fruta.startsWith('M') || fruta.startsWith('m'));
    
    if (frutaComM) {
      resolve('A lista contém pelo menos uma fruta que começa com "m".');
    } else {
      reject('A lista não contém frutas que começam com a letra "m".');
    }
  });
}

// Exemplo de uso da função
FrutasComM(frutas)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((mensagem) => {
    console.error(mensagem);
  });
