let token = "";

async function login(){

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch(
        "http://localhost:3000/auth/login",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                senha
            })
        }
    );

    const dados = await resposta.json();

    token = dados.token;

    alert("Login realizado!");
}

async function cadastrarProduto(){

    const nome = document.getElementById("nome").value;

    const preco = document.getElementById("preco").value;

    const quantidade = document.getElementById("quantidade").value;

    await fetch(
        "http://localhost:3000/produtos",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify({
                nome,
                preco,
                quantidade
            })
        }
    );

    alert("Produto cadastrado!");
}

async function listarProdutos(){

    const resposta = await fetch(
        "http://localhost:3000/produtos",
        {
            headers:{
                "Authorization":token
            }
        }
    );

    const produtos = await resposta.json();

    let html = "";

    produtos.forEach(produto => {

        html += `
        <div class="produto">

        <h3>${produto.nome}</h3>

        <p>💰 Preço: R$ ${produto.preco}</p>

        <p>📦 Quantidade: ${produto.quantidade}</p>

        <div class="acoes">

                <button class="editar"
                    onclick="editarProduto('${produto._id}')">
                    ✏️ Editar
                </button>

                <button class="excluir"
                    onclick="excluirProduto('${produto._id}')">
                    🗑️ Excluir
                </button>

            </div>

            </div>
        `;

    });

    document.getElementById("produtos").innerHTML = html;

}

async function excluirProduto(id){

    if(!confirm("Deseja realmente excluir este produto?")){
        return;
    }

    await fetch(
        `http://localhost:3000/produtos/${id}`,
        {
            method:"DELETE",
            headers:{
                "Authorization": token
            }
        }
    );

    listarProdutos();

}

async function editarProduto(id){

    const novoNome = prompt("Novo nome:");
    const novoPreco = prompt("Novo preço:");
    const novaQuantidade = prompt("Nova quantidade:");

    if(!novoNome || !novoPreco || !novaQuantidade){
        return;
    }

    await fetch(
        `http://localhost:3000/produtos/${id}`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                nome: novoNome,
                preco: novoPreco,
                quantidade: novaQuantidade
            })
        }
    );

    listarProdutos();

}