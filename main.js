var dadosLista = [];

function salvarCadastro()
{
    let nomeDescricao = document.getElementById('nomeDescricao').value;
     
    if(nomeDescricao)
    {
        dadosLista.push(nomeDescricao);
        console.log(dadosLista);
        criaLista();
        document.getElementById ('nomeDescricao').value = "";
    }
    else
    {
        alert("Favor inserir um nome para cadastro");
    }
}

function criaLista()
{
    let tabela = "<th>Descrição</th><th>Valor</th><th>Categoria</th>";

    for(let i = 0; i <= (dadosLista.length -1); i++)
    {
        tabela += "<tr><td>" + dadosLista[i] /*+ "</td><td> onclick=editar>Editar<td><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>"*/;
        document.getElementById('tabela').innerHTML = tabela;       
    }
}
