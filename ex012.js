// Jogo de adivinhação entre 1 e 50.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numero_gerado = Math.floor(Math.random() * 50) + 1; // entre 1 e 50

function pergunta_usuario() {
    rl.question('Digite um número entre 1 e 50: ', function(resposta) {
        const palpite = Number(resposta);

        if (palpite === numero_gerado) {
            console.log(`Parabéns! Você acertou o número ${numero_gerado}`);
        } else if (palpite < numero_gerado) {
            console.log(`Número abaixo que o gerado!`)
            pergunta_usuario();
        } else {
            console.log(`Muito alto!`)
            pergunta_usuario();
        }
    });
}

pergunta_usuario();
