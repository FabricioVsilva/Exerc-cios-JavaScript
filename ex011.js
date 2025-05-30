// Criar uma função que receba um nome e retorne uma saudação personalizada

const readline = require('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

function saudacao(nome) {
    return `Olá, ${nome}! Você está evoluindo em JavaScript, meus parabéns!`
};

rl.question('Digite o seu nome: ', (resposta_usuario) => {
    const mensagem = saudacao(resposta_usuario);

    console.log(mensagem);

    rl.close();
});
