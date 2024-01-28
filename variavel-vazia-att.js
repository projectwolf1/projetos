let teste = '';
// verifica se variavel está vazia ou não.
const verificaVazio = function(){
    if (teste === '') {
        console.log('é uma string vazia');

    }else{
        console.log('não é uma string vazia');

    }


    return teste;

}

verificaVazio();


//string recebe valor
const attVariavel = function () {

    teste += 'Olá Mundo';

    return teste;
}


//após atribuir o valor mostrar na tela.
console.log(attVariavel(teste));


//verifica novamente se é uma teste continua sendo uma string vazia.
verificaVazio(teste);
