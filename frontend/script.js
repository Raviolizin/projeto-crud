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
        <p>
            ${produto.nome}
            -
            R$ ${produto.preco}
            -
            Quantidade: ${produto.quantidade}
        </p>
        `;

    });

    document.getElementById("produtos").innerHTML = html;

}