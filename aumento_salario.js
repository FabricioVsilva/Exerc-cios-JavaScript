/*
Programa deve perguntar o nome da pessoa e depois comprimentar com o nome mediante o horário e dar bom dia, boa tarde e boa noite! 

< 2000: Aumento de 30%
<= 2800: Aumento de 15%
<= 3400: Aumento de 5%
*/

const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarSalario(nome) {
    rl.question(`${nome}, qual é o seu salário? `, function(valor_salario) {
        valor_salario = parseFloat(valor_salario);

        if (valor_salario <= 2000) {
            console.log('Parabéns! Você vai receber 30% de aumento!');
        } else if (valor_salario <= 2800) {
            console.log('Parabéns! Você vai receber 15% de aumento!');
        } else {
            console.log('Parabéns! Você vai receber 5% de aumento!');
        }
        rl.close(); // Finaliza o programa
    });
}

function cumprimentarEExecutar() {
    let hora = new Date().getHours();
    let saudacao = '';

    if (hora >= 5 && hora <= 12) {
        saudacao = 'Bom dia';
    } else if (hora > 12 && hora <= 18) {
        saudacao = 'Boa tarde';
    } else {
        saudacao = 'Boa noite';
    }

    rl.question(`${saudacao}! Qual é o seu nome? `, function(nome) {
        perguntarSalario(nome);
    });
}

cumprimentarEExecutar();







