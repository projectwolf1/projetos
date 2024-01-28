let teste = '';
// verifica se variavel está vazia ou não
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




console.log(attVariavel(teste));


verificaVazio(teste);
