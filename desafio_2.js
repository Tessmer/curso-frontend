//1: crie uma função que pode receber qualquer número de parâmetros e imprime eles separadamente no console
const result = (...params) => {
    console.log(params);
}

result(1, 2, 3);

//2: crie uma função que recebe um objeto como parâmetro, desestrutura a propriedade nome desse obj e imprime no console (realize a desestruturação nos próprios parâmetros)
const user = {
    name: "Samanta",
    idade: 19
}

function printUse({ name }) {
    console.log(name);
};
printUse(user);

//3: crie uma função que recebe dois objetos e retorna um novo objeto que é a combinação desses dois objetos
const obj1 = {
    name: "Samanta",
    age: 19,
    eye: "brown"
}

const obj2 = {
    surname: "Tessmer"
}

const objFunction = (a, b) => {
    const obj3 = { ...a, ...b }
    return console.log(obj3);
}

objFunction(obj1, obj2);

//4:  crie uma função que recebe dois arrays e retorna um novo array que é a combinação desses dois arrays
const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

const arrayFunction = (a, b) => {
    const array3 = [...a, ...b];
    return console.log(array3);
};

arrayFunction(array1, array2);