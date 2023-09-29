const pessoas = [
    { nome: 'Marcio', idade: 19 },
    { nome: 'Juan', idade: 12 },
    { nome: 'Luisa', idade: 25 },
    { nome: 'Robert', idade: 32 },
    { nome: 'Luana', idade: 23 },
  ];
  
  function encontrarPessoaMaisVelha() {
    return new Promise((resolve, reject) => {
      if (pessoas.length === 0) {
        reject(new Error('A lista de pessoas está vazia.'));
      } else {
        const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoa) => {
          return pessoa.idade > maisVelha.idade ? pessoa : maisVelha;
        }, pessoas[0]);
        resolve(pessoaMaisVelha);
      }
    });
  }
  
  function encontrarPessoaMaisNova() {
    return new Promise((resolve, reject) => {
      if (pessoas.length === 0) {
        reject(new Error('A lista de pessoas está vazia.'));
      } else {
        const pessoaMaisNova = pessoas.reduce((maisNova, pessoa) => {
          return pessoa.idade < maisNova.idade ? pessoa : maisNova;
        }, pessoas[0]);
        resolve(pessoaMaisNova);
      }
    });
  }
  
  // Exemplo de uso das funções
  encontrarPessoaMaisVelha()
    .then((pessoaMaisVelha) => {
      console.log(`Pessoa mais velha: ${pessoaMaisVelha.nome}, ${pessoaMaisVelha.idade} anos.`);
    })
    .catch((error) => {
      console.error(error.message);
    });
  
  encontrarPessoaMaisNova()
    .then((pessoaMaisNova) => {
      console.log(`Pessoa mais nova: ${pessoaMaisNova.nome}, ${pessoaMaisNova.idade} anos.`);
    })
    .catch((error) => {
      console.error(error.message);
    });
  