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

//string recebe valor

const attVariavel = function (teste) {

    teste += 'Olá Mundo';

    return teste;
}





verificaVazio();
console.log(attVariavel(teste));

