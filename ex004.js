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
    console.log(`
    =-=-= TABUADA =-=-=
      1 - Tabuada do 1
      2 - Tabuada do 2
      3 - Tabuada do 3
      4 - Tabuada do 4
      5 - Tabuada do 5
      6 - Tabuada do 6
      7 - Tabuada do 7
      8 - Tabuada do 8
      9 - Tabuada do 9
      10 - Tabuada do 10
        `);

    rl.question('Escolha um número para ver a tabuada entre 1 e 10: ', (escolha) => {
        const numero = Number(escolha);
        for (let i = 1; i <= 10; i++) {
            const result = escolha * i;
            console.log(`${escolha} * ${i} = ${result}`);
        }
    })

}

tabuada();

            