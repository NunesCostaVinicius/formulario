document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Seleciona o corpo da tabela
    const tabela = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];
    
    // Cria uma nova linha na tabela
    const novaLinha = tabela.insertRow();
    
    // Insere células na nova linha
    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);
    
    // Define o texto das células
    celulaNome.textContent = nome;
    celulaEmail.textContent = email;
    
    // Reseta o formulário
    this.reset();
});
