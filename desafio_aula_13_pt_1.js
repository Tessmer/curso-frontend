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

// 1.1: imprimir no console array com apenas os nomes dos colaboradores
const result = colaboradores.map(colaborador => {
    return colaborador.name;
})

console.log(result);

//1.2: imprimir no console array contendo apenas os colaboradores front-end
const result = colaboradores.map(colaborador => {
    if (colaborador.cargo === 'front-end') {
        console.log(colaborador);
    }
})

//1.3: imprimir no console o primeiro colaborador maior de 23 anos
const result = colaboradores.find(colaborador => {
    return colaborador.idade > 23;
})

console.log(result);

//1.4: imprimir no console se todos os colaboradores do array são maiores de 18 anos
const result = colaboradores.every(function (colaborador) {
    return colaborador.idade > 18;
})

console.log(result);

//1.5: imprimir no console se existe algum colaborador estagiário
const result = colaboradores.some(colaborador => {
    return colaborador.cargo === 'estagiario';
})

console.log(result);