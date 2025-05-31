readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas = []; // Array vazio onde posso guardar 

function mostrarMenu() {
    console.log(`
        ===== LISTA DE TAREFAS =====
        
        1 - Adicionar tarefas
        2 - Listar tarefas
        3 - Remover tarefas
        4 - Sair
        ============================
        `);
    }
mostrarMenu();
