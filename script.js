

function validarProd(idproduto,idcodigo,idquantidade){
    let nome = document.getElementById(idproduto).value
    let codigo = document.getElementById(idcodigo).value
    let quantidade = document.getElementById(idquantidade).value


    if(nome == ''){
        alert("O campo esta vazio")
    }
    else{
        cadastrar_produto(nome,codigo,parseInt(quantidade))
    }
}


function cadastrar_produto(produto,coding,quant){
let novo_produto = {nome:produto,codigo:coding,quantidade:quant}
let produtos = localStorage.getItem('produtos')
 if(produtos == null) produtos = []

 else 
produtos = JSON.parse(produtos)
 produtos.push(novo_produto)
 localStorage.setItem('produtos',JSON.stringify(produtos))
 alert("Os produto"  +produto+ " foi cadastrado na quantidade " +quant)
 atualizar_estoque("quantEstoque")
 location.reload()

}

function atualizar_estoque(idEstoque){
    localStorage.setItem("quantEstoque",++document.getElementById(idEstoque).innerHTML)
}

function carregar_total(idEstoque){
    let totalestoque = localStorage.getItem("quantEstoque")
    if (totalestoque == null) totalestoque = 0
    document.getElementById(idEstoque).innerHTML = totalestoque
}

function listar_Estoque(){
 let produtos =  localStorage.getItem("produtos")
 document.write('<h2 style="text-align: center;">Produtos em Estoque</h2>')
 document.write('<style>body {background-image: url("img/29116.jpg");background-repeat: no-repeat;background-size: 1292px 900px;}</style></body>')
 produtos = JSON.parse(produtos)

 produtos.forEach(produto=> {
    document.write('<ul>')
    document.write('<li>Produto: '+produto.nome+'</li>')
    document.write('<li> codigo:  '+produto.codigo+'</li>')
    document.write('<li> quantidade:  '+produto.quantidade+'</li>')
    document.write('</ul>')
 });

}
function limp(){
    alert("Dados apagados")
   localStorage.clear()
}