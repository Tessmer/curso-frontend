const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
}

//1: acesso à propriedades com ponto: imprimir no console o nome do usuário
console.log(user.nome);

//1: acesso à propriedades com ponto: imprimir no console a rua do usuário
console.log(user.endereco.rua);

//1: acesso à propriedades com ponto: imprimir o segundo projeto
console.log(user.projetos[1]);

//2: acesso à propriedades com colchetes: imprimir o nome do usuário
console.log(user["nome"]);

//2: acesso à propriedades com colchetes: imprimir a rua do usuário
console.log(user["endereco"]["rua"]);

//2: acesso à propriedades com colchetes: imprimir projeto 2
console.log(user["projetos"][1]);

//2: acesso à propriedades com colchetes: utilizando variáveis para os nomes das propriedades, imprima o número do endereço do usuário

let name = user["nome"];
let age = user["idade"];
let address = user["endereco"];
let streetAdd = user["endereco"]["rua"];
let numberAdd = user["endereco"]["numero"];
let project = user["projetos"][0];
let projects = user["projetos"][1];


console.log(numberAdd);