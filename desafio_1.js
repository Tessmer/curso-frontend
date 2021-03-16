const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
}

//1. a) desestruture e imprima no console o nome do usuário
let { nome } = user
console.log(nome);

//1. b) desestruture e imprima no console a rua
let { endereco: { rua } } = user
console.log(rua);

//1. c) desestruture e imprima no console os projetos
let { projetos: [...rest] } = user
console.log(...rest);

//1. d) desestruture e imprima no console a segunda posição da propriedade projetos
let { projetos: [, b] } = user
console.log(b);





const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true }
]

//2. a) desestruture e imprima no console o primeiro elemento do array
const [a, ,] = students
console.log(a);

//2. b) desestruture e imprima no console o terceiro elemento do array
const [, , c] = students
console.log(c);

//2. c) desestruture e imprima no console o nome do segundo estudante do array.
let [, b: { name },] = students
let { name } = b
console.log(name);


