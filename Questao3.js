const listaDeUsuarios = [];

function adicionarUsuario(id, nome, saldo) {
  return new Promise((resolve, reject) => {
    if (listaDeUsuarios.some((usuario) => usuario.id === id)) {
      reject(new Error(`Usuário com ID ${id} já existe.`));
    } else {
      const novoUsuario = { id, nome, saldo };
      listaDeUsuarios.push(novoUsuario);
      resolve(novoUsuario);
    }
  });
}

function obterInformacoesDoUsuario(id) {
  return new Promise((resolve, reject) => {
    const usuario = listaDeUsuarios.find((u) => u.id === id);
    if (usuario) {
      resolve(usuario);
    } else {
      reject(new Error(`Usuário com ID ${id} não encontrado.`));
    }
  });
}

function verificarSaldoMaiorQueZero(id) {
  return obterInformacoesDoUsuario(id)
    .then((usuario) => {
      if (usuario.saldo > 0) {
        return `${usuario.nome} possui saldo maior que zero.`;
      } else {
        return `${usuario.nome} possui saldo igual ou menor que zero.`;
      }
    });
}

function listarUsuarios() {
  return listaDeUsuarios;
}

// Exemplo de uso das funções
adicionarUsuario(1, 'João', 1000)
  .then(() => adicionarUsuario(2, 'Maria', 500))
  .then(() => adicionarUsuario(3, 'Pedro', -200))
  .then(() => console.log(listarUsuarios()))
  .then(() => obterInformacoesDoUsuario(2))
  .then((usuario) => console.log(`Informações do usuário: ${JSON.stringify(usuario)}`))
  .then(() => verificarSaldoMaiorQueZero(1))
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.error(error.message));
