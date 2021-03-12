const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]

//1. a) imprimir no console a soma da idade de todos os colaboradores
const result = colaboradores.reduce((acc, colaborador) => {
    return acc + colaborador.idade;
}, 0);

console.log(result);

//1. b) criar e imprimir objeto que possui a quantidade de colaboradores em cada cargo
const result = colaboradores.reduce(
    (acc, colaborador) =>
        Object.assign(acc, {
            [colaborador.cargo]: acc[colaborador.cargo]
                ? acc[colaborador.cargo] + 1
                : 1,
        }),
    {}
);
console.log(result);

//2. a) imprimir no console o array colaboradores ordenado por idade de forma crescente
const result = colaboradores.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1
    }

    if (a.idade > b.idade) {
        return 1;
    }

    return 0;

})

console.log(result);

//2. b) imprimir no console o array colaboradores ordenado por idade de forma decrescente
const result = colaboradores.sort((a, b) => {
    if (a.idade < b.idade) {
        return 1;
    }

    if (a.idade > b.idade) {
        return -1;
    }

    return 0;

})

console.log(result);

//2. c) imprimir no console o array colaboradores ordenado por cargo, sendo a ordem: estagiario, front-end, back-end e designer
const ordemCargos = {
    estagiario: 1,
    'front-end': 2,
    'back-end': 3,
    designer: 4
}

const arrayCargo = colaboradores.slice().sort((a, b) => {
    return ordemCargos[a.cargo] - ordemCargos[b.cargo]
})

console.log(arrayCargo);

//2: d) imprima no console o array colaboradores ordenado por idade de forma crescente e, em caso de empate, o desempate deve ser feito por ordem de cargo
const ordemCargos = {
    estagiario: 1,
    'front-end': 2,
    'back-end': 3,
    designer: 4
}

const arrayIdadeECargo = colaboradores.slice().sort((a, b) => {
    return a.idade - b.idade || ordemCargos[a.cargo] - ordemCargos[b.cargo]
})

console.log(arrayIdadeECargo);
