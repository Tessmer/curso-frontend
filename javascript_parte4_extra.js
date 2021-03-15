const installments = [
  {
    installment_number: 1,
    value: 123.45,
    status: 'Pago'
  },
  {
    installment_number: 2,
    value: 139.88,
    status: 'Pago'
  },
  {
    installment_number: 3,
    value: 123.45,
    status: 'Pago'
  },
  {
    installment_number: 4,
    value: 182.37,
    status: 'Aberto'
  },
  {
    installment_number: 5,
    value: 133.93,
    status: 'Aberto'
  }
]

// 1. a) imprima o valor total das parcelas no console
const totalValue = installments.reduce((acc, installment) => {
  return acc + installment.value;
}, 0);

console.log(totalValue);

// 1. b) crie e imprima no console um objeto que possui o valor em aberto e o valor total já pago
const totalValue = installments.reduce((acc, installment) => {
  if (installment.status === 'Aberto') {
    acc.total_open += installment.value;
  } else {
    acc.total_paid += installment.value;
  }
  return acc
}, {
  "total_paid": 0, "total_open": 0
});

console.log(totalValue);

//1. c) imprima no console o array de parcelas ordenado de forma decrescente
const result = installments.sort((a, b) => {
  if (a.value < b.value) {
    return 1;
  }

  if (a.value > b.value) {
    return -1;
  }

  return 0;

})

console.log(result);

//1. d) imprima no console o array de parcelas ordenado de forma crescente e, em caso de empate, o desempate deve ocorrer pelo número de parcela de forma decrescente
const result = installments.slice().sort((a, b) => {
  if (a.value < b.value) {
    return -1;
  }

  if (a.value > b.value) {
    return 1;
  }

  if (a.value === b.value) {
    return -1;
  }

  return 0;

})

console.log(result);