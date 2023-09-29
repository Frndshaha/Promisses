const listaDeCompras = ['Açaí', 'Melância', 'Feijão', 'Carne', 'Arroz'];

function verificarItemNaLista(item) {
  return new Promise((resolve, reject) => {
    if (listaDeCompras.includes(item)) {
      resolve(`O item "${item}" foi encontrado na lista de compras.`);
    } else {
      reject(`O item "${item}" não foi encontrado na lista de compras.`);
    }
  });
}

// Exemplo de uso da função
const itemParaVerificar = 'Açaí';

verificarItemNaLista(itemParaVerificar)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((mensagem) => {
    console.error(mensagem);
  });
