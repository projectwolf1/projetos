
let teste = '';

const verificaVazio = function(teste){
    if (teste === '') {
        console.log('é uma string vazia');

    }else{
        console.log('não é uma string vazia');

    }

    console.log(teste)

    return teste;

}

const attVariavel = function (teste) {

    teste += 'Olá Mundo';

    return teste;
}


verificaVazio(attVariavel(teste));

