readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas = [];

function mostrarMenu() {
    console.log(`
        ===== LISTA DE TAREFAS =====
        
        1 - Adicionar tarefas
        2 - Listar tarefas
        3 - Remover tarefas
        4 - Sair
        ============================
        `);

         rl.question('Escolha uma opção: ', function(opcao) {
        if (opcao === '1') {
            rl.question('Digite uma nova tarefa: ', function(tarefa) {
                tarefas.push(tarefa);
                console.log('Tarefa adicionada!');
                mostrarMenu();
            });

        } else if(opcao === '2') {
            console.log('\n=== TAREFAS ===');
            tarefas.forEach((t, i) => {
                console.log(`${i + 1}. ${t}`);
            });
            mostrarMenu();
        } else if (opcao === '3') {
            if (tarefas.length === 0) {
                console.log('Nenhuma tarefa para remover.');
                return mostrarMenu();
            }

            tarefas.forEach((t, i) => {
                console.log(`${i + 1}. ${t}`);
            });
            rl.question('Digite o número da tarefa que deseja remover: ', function(numero) {
              const index = parseInt(numero) -1;
              if (index >= 0 && index < tarefas.length) {
                tarefas.splice(index, 1);
                console.log('Tarefa removida!');
              }  
              mostrarMenu();
            });

        }else if (opcao === '4') {
            console.log('Saindo...');
            rl.close();
        } else {
            console.log('Opção inválida!');
            mostrarMenu();
        }
    });

}
mostrarMenu();

       