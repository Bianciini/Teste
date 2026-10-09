class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
    }
}

function entrar() {
    let nome = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (nome == "" || senha == "") {
        alert("Preencha todos os campos!");
    } else {
        let usuario = new Usuario(nome, senha);

        localStorage.setItem("usuario", usuario.nome);

        window.location.href = "jogo.html";
    }
}

let botaoEntrar = document.getElementById("botaoEntrar");

if (botaoEntrar != null) {
    botaoEntrar.addEventListener("click", entrar);
}