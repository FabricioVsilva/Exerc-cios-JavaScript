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

function pergunta_usuario() {

    let agora = new Date().getHours();

    if (agora >= 5 && agora <= 12) {
        rl.question('Bom dia! Qual é o seu nome? ', function(resposta) {
            rl.question(`${resposta}, qual é o seu salário? `, function(valor_salario) {
                if (valor_salario <= 2000) {
                    console.log('Parabéns! Você vai receber 30% de aumento!')
                } else if (valor_salario > 2000 && valor_salario <= 2800) {
                    console.log('Parabéns! Você vai receber 15% de aumento!')
                } else {
                    console.log('Parabéns! Você vai receber 5% de aumento!')
                };
            });
        });
        
    } else if (agora > 12 && agora <= 18) {
        rl.question('Boa tarde! Qual é o seu nome? ', function(resposta) {
            rl.question(`${resposta}, qual é o seu salário? `, function(valor_salario) {
                if (valor_salario <= 2000) {
                    console.log('Parabéns! Você vai receber 30% de aumento!')
                } else if (valor_salario > 2000 && valor_salario <= 2800) {
                    console.log('Parabéns! Você vai receber 15% de aumento!')
                } else {
                    console.log('Parabéns! Você vai receber 5% de aumento!')
                };
            });
        });

    } else {
         rl.question('Boa noite! Qual é o seu nome? ', function(resposta) {
            rl.question(`${resposta}, qual é o seu salário? `, function(valor_salario) {
                if (valor_salario <= 2000) {
                    console.log('Parabéns! Você vai receber 30% de aumento!')
                } else if (valor_salario > 2000 && valor_salario <= 2800) {
                    console.log('Parabéns! Você vai receber 15% de aumento!')
                } else {
                    console.log('Parabéns! Você vai receber 5% de aumento!')
                };
            });
        });
    }
};
pergunta_usuario();








