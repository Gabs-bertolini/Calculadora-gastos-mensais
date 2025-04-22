var dadosLista = [];

function salvarCadastro() {
    let nomeDescricao = document.getElementById('nomeDescricao').value;
    let nomeValor = parseFloat(document.getElementById('nomeValor').value);
    let nomeCategoria = document.getElementById('nomeCategoria').value;

    if (nomeDescricao && !isNaN(nomeValor) && nomeCategoria) {
        let novoItem = {
            descricao: nomeDescricao,
            valor: nomeValor,
            categoria: nomeCategoria
        };
        dadosLista.push(novoItem);
        console.log(dadosLista);
        criaLista();
        atualizarSoma();
        document.getElementById('nomeDescricao').value = "";
        document.getElementById('nomeValor').value = "";
        document.getElementById('nomeCategoria').value = "";
    } else {
        alert("Por favor, preencha todos os campos com um valor numérico válido.");
    }
}

function criaLista() {
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = `
        <thead>
            <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `; 

    let tbody = tabela.getElementsByTagName('tbody')[0];
    for (let i = 0; i < dadosLista.length; i++) {
        let linha = tbody.insertRow();
        let colunaDescricao = linha.insertCell();
        let colunaValor = linha.insertCell();
        let colunaCategoria = linha.insertCell();
        let colunaAcoes = linha.insertCell();
        let botaoExcluir = document.createElement('button');

        colunaDescricao.textContent = dadosLista[i].descricao;
        colunaValor.textContent = dadosLista[i].valor;
        colunaCategoria.textContent = dadosLista[i].categoria;

        botaoExcluir.className = 'btn btn-danger';
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.onclick = function() {
            excluir(i); 
        };
        colunaAcoes.appendChild(botaoExcluir);
    }
}

function excluir(index) {
    dadosLista.splice(index, 1);
    criaLista();
    atualizarSoma(); 
}

function atualizarSoma() {
    let total = 0;
    for (let i = 0; i < dadosLista.length; i++) {
        total += dadosLista[i].valor;
    }
    document.getElementById('totalValor').textContent = total.toFixed(2);
}
atualizarSoma();