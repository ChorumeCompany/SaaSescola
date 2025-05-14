import * as mensagens from '../../src/utils/mensagens-ptbr';

describe('mensagens-ptbr exports', () => {
  it('should export internaServerError with correct values', () => {
    expect(mensagens.internaServerError).toEqual({
      message: 'Internal Server Error.',
      statusCode: 500,
      img: 'https://http.cat/status/500',
    });
  });

  it('should export notFound with correct values', () => {
    expect(mensagens.notFound).toEqual({
      message: 'Not Found.',
      statusCode: 404,
      img: 'https://http.cat/status/404',
    });
  });

  it('should export badRequest with correct values', () => {
    expect(mensagens.badRequest).toEqual({
      message: 'Bad Request.',
      statusCode: 400,
      img: 'https://http.cat/status/400',
    });
  });

  it('should export created with correct values', () => {
    expect(mensagens.created).toEqual({
      message: 'Created.',
      statusCode: 201,
      img: 'https://http.cat/status/201',
    });
  });

  it('should export unauthorized with correct values', () => {
    expect(mensagens.unauthorized).toEqual({
      message: 'Unauthorized.',
      statusCode: 401,
      img: 'https://http.cat/status/401',
    });
  });

  it('should export ok with correct values', () => {
    expect(mensagens.ok).toEqual({
      message: 'Ok.',
      statusCode: 200,
      img: 'https://http.cat/status/200',
    });
  });

  it('should export unprocessableEntity with correct values', () => {
    expect(mensagens.unprocessableEntity).toEqual({
      message: 'Unprocessable Entity.',
      statusCode: 422,
      img: 'https://http.cat/status/422',
    });
  });

  it('should export tokenExpired with correct values', () => {
    expect(mensagens.tokenExpired).toEqual({
      message: 'Token Expired.',
      statusCode: 498,
      img: 'https://http.cat/status/498',
    });
  });

  it('should export noContent with correct values', () => {
    expect(mensagens.noContent).toEqual({
      message: 'No Content.',
      statusCode: 204,
      img: 'https://http.cat/status/204',
    });
  });

  it('should export accepted with correct values', () => {
    expect(mensagens.accepted).toEqual({
      message: 'Accepted.',
      statusCode: 202,
      img: 'https://http.cat/status/202',
    });
  });
});

describe('mensagens.validacao', () => {
  it('should have all required validation messages with correct structure', () => {
    const keys = [
      'idCliente',
      'idSimulacao',
      'idCarctr',
      'Login',
      'clientId',
      'cdConven',
      'cdProdut',
      'cdCvcons',
      'dtVct1ap',
      'dtVctult',
      'vlTotal',
      'vlSeguro',
      'vlPresta',
      'vlOutvlr',
      'vlLiquid',
      'vlJuros',
      'vlIofCob',
      'vlFinan',
      'vlContra',
      'vlConces',
      'txRefCdc',
      'txFinmes',
      'txFinano',
      'txCetMes',
      'txCetAno',
      'qtPresta',
      'dtContra',
      'orchestratorId',
      'simulationId',
      'idPrestResponse',
      'nrTxmax',
      'nrTxmin',
      'qtPrestmax',
      'qtPrestmin',
      'qtRegist',
      'vlFinanc',
      'simulationStatusId',
      'cpf',
      'name',
      'statusId',
      'phone',
      'password',
      'email',
      'roleId',
      'companyId',
      'identity',
      'birthDate',
      'genderId',
      'maritalStatusId',
      'personTypeId',
      'mainPhone',
      'mainEmail',
      'mainAddressId',
      'bankDataId',
      'street',
      'number',
      'neighborhood',
      'city',
      'state',
      'postalCode',
      'cnpj',
      'tipoCompany',
      'ddd',
      'dadosPf',
    ];
    keys.forEach((key) => {
      expect(mensagens.validacao).toHaveProperty(key);
    });
  });

  it('should have correct mensagem and statusCode for idCliente', () => {
    expect(mensagens.validacao.idCliente).toEqual({
      mensagem: 'o [idCliente] é obrigatório',
      statusCode: mensagens.notFound,
    });
  });

  it('should have correct mensagem and statusCode for idSimulacao', () => {
    expect(mensagens.validacao.idSimulacao).toEqual({
      mensagem: 'o [idSimulacao] é obrigatório',
      statusCode: mensagens.notFound,
    });
  });

  it('should have correct mensagem and statusCode for cpf', () => {
    expect(mensagens.validacao.cpf).toEqual({
      mensagem: 'O [cpf] é obrigatório',
      statusCode: mensagens.notFound,
    });
  });

  it('should have correct mensagem and statusCode for email', () => {
    expect(mensagens.validacao.email).toEqual({
      mensagem: 'O [email] é obrigatório',
      statusCode: mensagens.notFound,
    });
  });

  it('should have correct mensage and statusCode for identity', () => {
    expect(mensagens.validacao.identity).toEqual({
      mensage: 'O [identity] é obrigatório',
      statusCode: mensagens.notFound,
    });
  });

  it('should have correct mensage and statusCode for birthDate', () => {
    expect(mensagens.validacao.birthDate).toEqual({
      mensage: 'O [birthDate] é obrigatório',
      statusCode: mensagens.notFound,
    });
  });

  it('should have correct mensagem and statusCode for dadosPf', () => {
    expect(mensagens.validacao.dadosPf).toEqual({
      mensagem: 'O [dadosPf] é obrigatório',
      statusCode: mensagens.notFound,
    });
  });

  it('should have correct mensagem and statusCode for postalCode', () => {
    expect(mensagens.validacao.postalCode).toEqual({
      mensagem: 'O [cep] é obrigatório',
      statusCode: mensagens.notFound,
    });
  });

  it('should have correct mensagem and statusCode for ddd', () => {
    expect(mensagens.validacao.ddd).toEqual({
      mensagem: 'O [DDD] é obrigatório',
      statusCode: mensagens.notFound,
    });
  });

  it('should have correct mensagem and statusCode for tipoCompany', () => {
    expect(mensagens.validacao.tipoCompany).toEqual({
      mensagem: 'O [tipoCompany] é obrigatório',
      statusCode: mensagens.notFound,
    });
  });
});
