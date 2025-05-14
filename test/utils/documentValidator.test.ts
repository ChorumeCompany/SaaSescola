import {
  validaCPF,
  validarCPFouCNPJ,
  validarCNPJ,
} from '../../src/utils/documentValidator';

describe('validarCNPJ', () => {
  it('should return false for empty string', () => {
    expect(validarCNPJ('')).toBe(false);
  });

  it('should return false for CNPJ with less than 14 digits', () => {
    expect(validarCNPJ('1234567890123')).toBe(false);
  });

  it('should return false for CNPJ with more than 14 digits', () => {
    expect(validarCNPJ('123456789012345')).toBe(false);
  });

  it('should return false for CNPJ with all identical digits', () => {
    expect(validarCNPJ('00000000000000')).toBe(false);
    expect(validarCNPJ('11111111111111')).toBe(false);
    expect(validarCNPJ('22222222222222')).toBe(false);
    expect(validarCNPJ('99999999999999')).toBe(false);
  });

  it('should ignore non-digit characters', () => {
    expect(validarCNPJ('19.131.243/0001-97')).toBe(true);
    expect(validarCNPJ('11.444.777/0001-61')).toBe(true);
  });
});
describe('validaCPF', () => {
  it('should return false for empty string', () => {
    expect(validaCPF('')).toBe(false);
  });

  it('should return false for CPF with less than 11 digits', () => {
    expect(validaCPF('1234567890')).toBe(false);
  });

  it('should return false for CPF with more than 11 digits', () => {
    expect(validaCPF('123456789012')).toBe(false);
  });

  it('should return false for CPF with all identical digits', () => {
    expect(validaCPF('00000000000')).toBe(false);
    expect(validaCPF('11111111111')).toBe(false);
    expect(validaCPF('22222222222')).toBe(false);
    expect(validaCPF('99999999999')).toBe(false);
  });

  it('should return true for valid CPF', () => {
    expect(validaCPF('52998224725')).toBe(true); // Receita Federal example
    expect(validaCPF('12345678909')).toBe(true); // Receita Federal example
  });

  it('should ignore non-digit characters', () => {
    expect(validaCPF('529.982.247-25')).toBe(true);
    expect(validaCPF('123.456.789-09')).toBe(true);
  });

  it('should return false for invalid CPF', () => {
    expect(validaCPF('12345678901')).toBe(false);
    expect(validaCPF('52998224724')).toBe(false);
  });
});

describe('validarCPFouCNPJ', () => {
  it('should return true for valid CPF', () => {
    expect(validarCPFouCNPJ('52998224725')).toBe(true);
  });

  it('should return true for valid CNPJ', () => {
    expect(validarCPFouCNPJ('19131243000197')).toBe(true);
  });

  it('should return error object for invalid CPF', () => {
    expect(validarCPFouCNPJ('12345678901')).toEqual({
      message: 'CPF inválido',
      statusCode: 422,
    });
  });

  it('should return error object for invalid CNPJ', () => {
    expect(validarCPFouCNPJ('12345678901234')).toEqual({
      message: 'CNPJ inválido',
      statusCode: 422,
    });
  });

  it('should return error object for invalid length', () => {
    expect(validarCPFouCNPJ('123')).toEqual({
      message:
        'Documento inválido. Deve ser um CPF (11 dígitos) ou CNPJ (14 dígitos).',
      statusCode: 422,
    });
    expect(validarCPFouCNPJ('123456789012')).toEqual({
      message:
        'Documento inválido. Deve ser um CPF (11 dígitos) ou CNPJ (14 dígitos).',
      statusCode: 422,
    });
  });
});
