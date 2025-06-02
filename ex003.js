// Par ou ímpar
/*
const a = 100;

if (a % 2 === 0) {
    console.log("Número par")
} else{
    console.log("Número ímpar")
};
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function parimpar() {
    rl.question('Digite um número para saber se é par ou ímpar: ', (resposta) => {
        const numero = Number(resposta);
        if (resposta % 2 === 0) {
            console.log(`${resposta} é par`);
        } else {
            console.log(`${resposta} é ímpar`)
        }
        rl.close();
    });
}
parimpar();
