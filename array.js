const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true }
]


//1: imprimir SOMENTE o nome de cada estudante
const names = students.forEach(student => console.log(student.name));

//2: imprimir estudantes com mais de 20 anos
const result = students.forEach(student => {
    if (student.age > 20) {
        console.log(student.name);
    }
});

//3: crie um novo array contendo somente os estudantes que possuem bolsa e imprima esse novo array no console
const scholarshipStudent = students.forEach(student => {
    if (student.scholarship === true) {
        console.log(student.name);
    }
});