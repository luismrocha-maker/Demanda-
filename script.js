javascript
function mostrarMensagem() {
    alert("Olá! Para fazer seu pedido, preencha o formulário de contato.");
}

function enviarMensagem() {
    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome == "" || mensagem == "") {
        alert("Por favor, preencha seu nome e sua mensagem.");
    } else {
        alert("Obrigado, " + nome + "! Sua mensagem foi enviada.");
    }
}

