function maiorIdade(pessoa) 
{
    return new Promise((resolve, reject) => {
        if (pessoa.idade >= 18)
        {
            resolve(true);
        } else 
        {
            resolve(false);
        }
    });
}

const pessoas = [
    {
        nome: 'João',
        idade: 12
    },
    {
        nome: 'Pedro',
        idade: 19
    },
    {
        nome: "Maria",
        idade: 26
    },
    {
        nome: "Cleberte",
        idade: 16
    },
]

function contadorMaiorIdade()
{
    let cont = 0;

    const promessas = pessoas.map((pessoa) => {
        return maiorIdade(pessoa).then((maiorDeIdade) => {
          if (maiorDeIdade) {
            cont++;
          }
        });
      });

      return Promise.all(promessas).then(() => {
        return cont;
      });
    }

    contadorMaiorIdade()
    .then((total) => {
      console.log(`Total de pessoas maiores de 18 anos: ${total}`);
    })
    .catch((error) => {
      console.error('Ocorreu um erro:', error);
    });