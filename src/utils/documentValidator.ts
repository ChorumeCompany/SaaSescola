function validaCPF(cpf): boolean {
  const cpfLimpo = cpf.replace(/\D/g, '');

  const nums = cpfLimpo.split('').map((num) => parseInt(num));

  if (nums.length !== 11) return false;

  const todosIguais = nums.every((num) => num === nums[0]);
  if (todosIguais) return false;

  let soma1 = 0;
  for (let i = 0; i < 9; i++) {
    soma1 += nums[i] * (10 - i);
  }
  let resto1 = (soma1 * 10) % 11;
  if (resto1 === 10) resto1 = 0;

  let soma2 = 0;
  for (let i = 0; i < 10; i++) {
    soma2 += nums[i] * (11 - i);
  }
  let resto2 = (soma2 * 10) % 11;
  if (resto2 === 10) resto2 = 0;

  return resto1 === nums[9] && resto2 === nums[10];
}

function validarCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj === '') return false;

  if (cnpj.length !== 14) {
    return false;
  }

  const invalidCNPJs = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999',
  ];

  if (invalidCNPJs.includes(cnpj)) {
    return false;
  }

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(0))) {
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(1))) {
    return false;
  }

  return true;
}

export function validarCPFouCNPJ(cpfOuCnpj: string): any {
  if (cpfOuCnpj.length === 11) {
    if (!validaCPF(cpfOuCnpj)) {
      return { message: 'CPF inválido', statusCode: 422 };
    }
    return true;
  } else if (cpfOuCnpj.length === 14) {
    if (!validarCNPJ(cpfOuCnpj)) {
      return { message: 'CNPJ inválido', statusCode: 422 };
    }
    return true;
  } else {
    return {
      message:
        'Documento inválido. Deve ser um CPF (11 dígitos) ou CNPJ (14 dígitos).',
      statusCode: 422,
    };
  }
}
