//1: com o auxílio da função setTimeout, crie três promises: 2 que resolvem e 1 que rejeita, retornando strings de escolha própria
const res1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolveu res1");
    }, 1000);
  })
}

const res2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve res2");
    }, 2000);
  })
}

const res3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejeita res3");
    }, 3000);
  })
}


//2: construa uma função assíncrona com tratamento de erros que executará todas as três promises criadas no exercício 1 e imprimirá suas respostas
async function results() {
  try {
    const res = await Promise.all([res1(), res2(), res3()]);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

results();

//3: "", além disso deverá ter um bloco finally que imprime no console "final da execução".
async function results() {
  try {
    const res = await Promise.all([res1(), res2(), res3()]);
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Fim da execução");
  }
}

results();
