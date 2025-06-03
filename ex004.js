// Tabuada do 5


/*
const tabuada = 5;

for (let i = 1; i <= 10; i++) {
    const result = tabuada * i;
    console.log(`${tabuada} * ${i} = ${result}`);
};
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tabuada() {
    rl.question('Escolha um número para ver a tabuada entre 1 e 10: ', (escolha) => {
        const numero = Number(escolha);
        for (let i = 1; i <= 10; i++) {
            const result = numero * i;
            console.log(`${numero} * ${i} = ${result}`);
        }
        rl.close();
    })
}
tabuada();            