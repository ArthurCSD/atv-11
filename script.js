function mostrarnomeeidade() {
    let divnova = document.createElement("div");
    let inputnome = document.querySelector("#nome");
    let inputidade = document.querySelector("#idade");
    let textonovo = document.createTextNode('Bem Vindo ' +nome+  ' você tem ' +idade+ ' anos de idade');

    divnova.appendChild(textonovo);
    document.body.appendChild(divnova);
}

let botaook = document.querySelector("#botao");
botaook.onclick = mostrarnomeeidade;
