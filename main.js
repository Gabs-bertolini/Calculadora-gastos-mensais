var dadosLista = [];

function salvarCadastro() {
    let nomeDescricao = document.getElementById('nomeDescricao').value;
    let nomeValor = document.getElementById('nomeValor').value;
    let nomeCategoria = document.getElementById('nomeCategoria').value;

    if (nomeDescricao && nomeValor && nomeCategoria) {
        let novoItem = {
            descricao: nomeDescricao,
            valor: nomeValor,
            categoria: nomeCategoria
        };
        dadosLista.push(novoItem);
        console.log(dadosLista);
        criaLista();
        document.getElementById('nomeDescricao').value = "";
        document.getElementById('nomeValor').value = "";
        document.getElementById('nomeCategoria').value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function criaLista() {
    let tabela = "<thead><tr><th>Descrição</th><th>Valor</th><th>Categoria</th></tr></thead><tbody>";

    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i].descricao + "</td><td>" + dadosLista[i].valor + "</td><td>" + dadosLista[i].categoria + "</td></tr>";
    }

    tabela += "</tbody>";
    document.getElementById('tabela').innerHTML = tabela;
}