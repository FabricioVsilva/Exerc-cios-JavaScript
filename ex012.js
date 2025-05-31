// Jogo de adivinhação entre 1 e 20.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
- Math.random() gera um número entre 0 e 1 (excluindo o 1).
- Multiplicando por 50 → número entre 0 e 49.999...
- Math.floor() arredonda **para baixo** → resultado vai de 0 a 49.
- Somando +1 → final: número entre 1 e 50.
- Esse é o número secreto que o usuário precisa adivinhar.
*/
const numero_gerado = Math.floor(Math.random() * 20) + 1;

function pergunta_usuario() {
    rl.question('Digite um número entre 1 e 20: ', function(resposta) {
        const palpite = Number(resposta); // A resposta do usuário vem como texto (string), então aqui converti para número.

        if (palpite === numero_gerado) {
            console.log(`Parabéns! Você acertou o número ${numero_gerado}`);
            rl.close();
        } else if (palpite < numero_gerado) {
            console.log(`Número abaixo que o gerado!`)
            pergunta_usuario();
        } else {
            console.log(`Muito alto!`)
            pergunta_usuario();
        }
    });
}

pergunta_usuario(); // Chamando a função
