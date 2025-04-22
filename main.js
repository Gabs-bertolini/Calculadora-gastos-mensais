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
        tabela += "<tr><td>" + dadosLista[i].descricao + "</td><td>" + dadosLista[i].valor + "</td><td>" + dadosLista[i].categoria + "</td><td><td><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
    }

    tabela += "</tbody>";
    document.getElementById('tabela').innerHTML = tabela;
}

function excluir(i)
{
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}