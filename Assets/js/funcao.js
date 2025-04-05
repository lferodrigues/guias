// Atualiza o ano no rodapé
document.getElementById('currentYear').textContent = new Date().getFullYear();
// Bloquear botão direito do mouse
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Função desabilitada!");
});

// Bloquear teclas de atalho relacionadas a ferramentas de desenvolvedor
document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" || // F12 para abrir DevTools
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl+Shift+J
        (event.ctrlKey && event.key === "U") || // Ctrl+U para visualizar o código-fonte
        (event.ctrlKey && event.key === "S") // Ctrl+S para salvar a página
    ) {
        event.preventDefault();
        alert("Ação bloqueada!");
    }
});

// Tentar detectar o uso das ferramentas de desenvolvedor
(function detectDevTools() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            alert("Ferramentas de desenvolvedor detectadas e bloqueadas!");
            window.location.href = "about:blank"; // Redireciona a página
        }
    });
    console.log('%c', element);
})();
document.addEventListener('keydown', function(event) {
    // Bloqueia Ctrl+S (salvar)
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        alert('A combinação Ctrl+S está desabilitada!');
    }
    // Bloqueia Ctrl+U (ver código-fonte)
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        alert('A combinação Ctrl+U está desabilitada!');
    }
});
     
//Função para formatar a inserção de data quando o usuario digitar sem o placeholder
function formatarData(input) {
    let valor = input.value.replace(/\D/g, "");
    if (valor.length > 2) valor = valor.slice(0, 2) + '/' + valor.slice(2);
    if (valor.length > 5) valor = valor.slice(0, 5) + '/' + valor.slice(5, 9);
    input.value = valor;
}
//Função para formatar a inserção de telefone quando o usuario digitar sem o placeholder
function formatarTelefone(input) {
    let valor = input.value.replace(/\D/g, "");
    if (valor.length > 2) valor = '(' + valor.slice(0, 2) + ') ' + valor.slice(2);
    if (valor.length > 10) valor = valor.slice(0, 10) + '-' + valor.slice(10, 14);
    input.value = valor;
}

function imprimirPagina() {
    window.print();
}

