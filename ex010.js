// Calcular a média de três notas e mostrar se o aluno está aprovado (média >= 7)

/*
const nota_1 = prompt("Primeira nota: ")
const nota_2 = prompt("Segunda nota: ")
const nota_3 = prompt("Terceira nota: ")

med_nota = ((nota_1 + nota_2 + nota_3) / 3)

console.log(med_nota)
*/

const readline = require('readline');

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout   
});

rl.question('Primeira nota: ', (nota_1) => {
    rl.question('Segunda nota: ', (nota_2) => {
        rl.question('Terceira nota: ', (nota_3) => {
            const n1 = parseInt(nota_1);
            const n2 = parseInt(nota_2);
            const n3 = parseInt(nota_3);

            const med_notas = (n1 + n2 + n3) / 3;
            console.log(`A média é: ${med_notas.toFixed(2)}`);

            rl.close();
        });
    });
});