let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//1.
//   console.log('Bem vinda, ' + info.personagem);

//2.
info.recorrente = 'Sim'
//   console.log(info.recorrente)

//3.
for (let index in info) {
    //  console.log(index);
}

//4.   
for (let index in info) {

    //    console.log(info[index]);
}

//5.
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells For Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',

}
for (let index in info) {
    if (
        index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim'
    ) {
        //   console.log('Ambos recorrentes');
    } else {
        //   console.log(info[index] + ' e ' + info2[index]);
    }
}

//6.
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

//7.
leitor.livrosFavoritos.push(
    {

        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',

    },

);

// console.log(leitor.livrosFavoritos);

//8.
// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');


//                              FUNÇÕES                         //

//1. palindromo

//2. 
function indexMaiorValor (array) {
    let maiorValor = [0];
    for (let index = 0; index < array.length; index += 1) {
        if (array[maiorValor] > array[index]) {
            maiorValor = index;
        }
        
    }
    return maiorValor;
}
// console.log(indexMaiorValor([2,3,6,7,10,1]));

//3.
function indexMenorValor (inteiros) {
    let menorValor = [0];
    for (let index = 0; index < inteiros.length; index += 1) {
      if(inteiros[menorValor] >inteiros[index]) {
          menorValor = index;
      }
        
    }
    return menorValor
}
// console.log(indexMenorValor([2,4,6,7,10,0,-3]));

//4.
function indicaMaiorNome (nomes) {
    let nomeMaior = nomes[0];
    for (let index in nomes){
    if(nomeMaior.length < nomes[index].length) {
        nomeMaior = nomes[index];
    }
    }
        return nomeMaior
    
}
// console.log(indicaMaiorNome(['José','Lucas','Nádia','Fernanda','Cairo','Joana']));

//5. revisar, ainda não entendi

//6.

function somaNumeros (nNatural){
    let valorSoma = 0;
    for(let index = 1; index <= nNatural; index += 1){
        valorSoma = valorSoma + index;
    }
    return valorSoma
}
// console.log(somaNumeros(5));

//7.
function verificaFinal(word, end) {
    word = word.split('');
    end = end.split('');
    verificador = true;
    for (let index = 0; index < end.length; index += 1) {
      if (word[word.length - end.length + index] != end[index]) {
        verificador = false;
      }
    }
    return verificador;
  }
  
//   console.log(verificaFinal('trybe','be'));