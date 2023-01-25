


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
 alert("Os produtos "  +produto+ " foram cadastrado na quantidade " +quant)
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
 document.write('<a style="font-size:20px; border-radius: 5px;  padding: 15px; background-color: rgb(99, 181, 219);" href="index.html">Menu</a>')
 document.write('<br>')
 document.write('<br>')
 produtos.forEach(produto=> {
    document.write('<br>')
    document.write('<th>')
    document.write('<td> Produto: ' +produto.nome+'|','</td>')
    document.write('<td>  Codigo:  '+produto.codigo+ '|', '</td>')
    document.write('<td> quantidade:  '+produto.quantidade+' unidade(s) </td>')
    document.write('<button style="margin-left: 10px;" onclick="excluir_item()"> Excluir </button>')
    document.write('</th>')


 });

}
function limp(){
localStorage.clear()    

}


function Menu_back(){ 
   window.open('index.html')

    }


function excluir_item(index){
    let produtos = localStorage.getItem('produtos')
    produtos = JSON.parse(produtos)
    produtos.pop()
    localStorage.setItem('produtos',JSON.stringify(produtos))
    console.log(produtos)
    alert("opa")
    location.reload()
       }
    


