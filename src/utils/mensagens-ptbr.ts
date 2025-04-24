export const InternalServerError = {
  message: 'Internal Server Error.',
  statusCode: 500,
  img: `https://http.cat/status/500`,
};
export const NotFound = {
  message: 'Not Found.',
  statusCode: 404,
  img: `https://http.cat/status/404`,
};
export const BadRequest = {
  message: 'Bad Request.',
  statusCode: 400,
  img: `https://http.cat/status/400`,
};
export const Created = {
  message: 'Created.',
  statusCode: 201,
  img: `https://http.cat/status/201`,
};
export const Unauthorized = {
  message: 'Unauthorized.',
  statusCode: 401,
  img: `https://http.cat/status/401`,
};
export const Ok = {
  message: 'Ok.',
  statusCode: 200,
  img: `https://http.cat/status/200`,
};
export const unprocessableEntity = {
  message: 'Unprocessable Entity.',
  statusCode: 422,
  img: `https://http.cat/status/422`,
};
export const TokenExpired = {
  message: 'Token Expired.',
  statusCode: 498,
  img: `https://http.cat/status/498`,
};
export const NoContent = {
  message: 'No Content.',
  statusCode: 204,
  img: `https://http.cat/status/204`,
};
export const Accepted = {
  message: 'Accepted.',
  statusCode: 202,
  img: `https://http.cat/status/202`,
};

export const Validacao = {
  //obrigatório
  idCliente: { mensagem: 'o [idCliente] é obrigatório', statusCode: NotFound },
  idSimulacao: {
    mensagem: 'o [idSimulacao] é obrigatório',
    statusCode: NotFound,
  },
  idCarctr: { mensagem: 'O [idCarctr] é obrigatório', statusCode: NotFound },
  Login: { mensagem: 'o [Login] é obrigatório', statusCode: NotFound },
  clientId: { mensagem: 'o [clientId] é obrigatório', statusCode: NotFound },
  cdConven: { mensagem: 'O [cdConven] é obrigatório', statusCode: NotFound },
  cdProdut: { mensagem: 'O [cdProdut] é obrigatório', statusCode: NotFound },
  cdCvcons: { mensagem: 'O [cdCvcons] é obrigatório', statusCode: NotFound },
  dtVct1ap: { mensagem: 'O [dtVct1ap] é obrigatório', statusCode: NotFound },
  dtVctult: { mensagem: 'O [dtVctult] é obrigatório', statusCode: NotFound },
  vlTotal: { mensagem: 'O [vlTotal] é obrigatório', statusCode: NotFound },
  vlSeguro: { mensagem: 'O [vlSeguro] é obrigatório', statusCode: NotFound },
  vlPresta: { mensagem: 'O [vlPresta] é obrigatório', statusCode: NotFound },
  vlOutvlr: { mensagem: 'O [vlOutvlr] é obrigatório', statusCode: NotFound },
  vlLiquid: { mensagem: 'O [vlLiquid] é obrigatório', statusCode: NotFound },
  vlJuros: { mensagem: 'O [vlJuros] é obrigatório', statusCode: NotFound },
  vlIofCob: { mensagem: 'O [vlIofCob] é obrigatório', statusCode: NotFound },
  vlFinan: { mensagem: 'O [vlFinan] é obrigatório', statusCode: NotFound },
  vlContra: { mensagem: 'O [vlContra] é obrigatório', statusCode: NotFound },
  vlConces: { mensagem: 'O [vlConces] é obrigatório', statusCode: NotFound },
  txRefCdc: { mensagem: 'O [txRefCdc] é obrigatório', statusCode: NotFound },
  txFinmes: { mensagem: 'O [txFinmes] é obrigatório', statusCode: NotFound },
  txFinano: { mensagem: 'O [txFinano] é obrigatório', statusCode: NotFound },
  txCetMes: { mensagem: 'O [txCetMes] é obrigatório', statusCode: NotFound },
  txCetAno: { mensagem: 'O [txCetAno] é obrigatório', statusCode: NotFound },
  qtPresta: { mensagem: 'O [qtPresta] é obrigatório', statusCode: NotFound },
  dtContra: { mensagem: 'O [dtContra] é obrigatório', statusCode: NotFound },
  orchestratorId: {
    mensagem: 'O [orchestratorId] é obrigatório',
    statusCode: NotFound,
  },
  simulationId: {
    mensagem: 'O [simulationId] é obrigatório',
    statusCode: NotFound,
  },

  idPrestResponse: {
    mensagem: 'O [idPrestResponse] é obrigatório',
    statusCode: NotFound,
  },
  nrTxmax: { mensagem: 'O [nrTxmax] é obrigatório', statusCode: NotFound },
  nrTxmin: { mensagem: 'O [nrTxmin] é obrigatório', statusCode: NotFound },
  qtPrestmax: {
    mensagem: 'O [qtPrestmax] é obrigatório',
    statusCode: NotFound,
  },
  qtPrestmin: {
    mensagem: 'O [qtPrestmin] é obrigatório',
    statusCode: NotFound,
  },
  qtRegist: { mensagem: 'O [qtRegist] é obrigatório', statusCode: NotFound },
  vlFinanc: { mensagem: 'O [vlFinanc] é obrigatório', statusCode: NotFound },
  simulationStatusId: {
    mensagem: 'O [simulationStatusId] é obrigatório',
    statusCode: NotFound,
  },
  cpf: { mensagem: 'O [cpf] é obrigatório', statusCode: NotFound },
  name: { mensagem: 'O [name] é obrigatório', statusCode: NotFound },
  statusId: { mensagem: 'O [statusId] é obrigatório', statusCode: NotFound },
  phone: { mensagem: 'O [phone] é obrigatório', statusCode: NotFound },
  password: { mensagem: 'O [password] é obrigatório', statusCode: NotFound },
  email: { mensagem: 'O [email] é obrigatório', statusCode: NotFound },
  roleId: { mensagem: 'O [roleId] é obrigatório', statusCode: NotFound },
  companyId: { mensagem: 'O [companyId] é obrigatório', statusCode: NotFound },
  identity: { mensage: 'O [identity] é obrigatório', statusCode: NotFound },
  birthDate: { mensage: 'O [birthDate] é obrigatório', statusCode: NotFound },
  genderId: { mensage: 'O [genderId] é obrigatório', statusCode: NotFound },
  maritalStatusId: {
    mensage: 'O [maritalStatusId] é obrigatório',
    statusCode: NotFound,
  },
  personTypeId: {
    mensage: 'O [personTypeId] é obrigatório',
    statusCode: NotFound,
  },
  mainPhone: { mensage: 'O [mainPhone] é obrigatório', statusCode: NotFound },
  mainEmail: { mensage: 'O [mainEmail] é obrigatório', statusCode: NotFound },
  mainAddressId: {
    mensage: 'O [mainAddressId] é obrigatório',
    statusCode: NotFound,
  },
  bankDataId: { mensage: 'O [bankDataId] é obrigatório', statusCode: NotFound },
  street: { mensagem: 'O [street] é obrigatório', statusCode: NotFound },
  number: { mensagem: 'O [number] é obrigatório', statusCode: NotFound },
  neighborhood: {
    mensagem: 'O [neighborhood] é obrigatório',
    statusCode: NotFound,
  },
  city: { mensagem: 'O [city] é obrigatório', statusCode: NotFound },
  state: { mensagem: 'O [state] é obrigatório', statusCode: NotFound },
  postalCode: {
    mensagem: 'O [cep] é obrigatório',
    statusCode: NotFound,
  },
  cnpj: { mensagem: 'O [cnpj] é obrigatório', statusCode: NotFound },
  tipoCompany: {
    mensagem: 'O [tipoCompany] é obrigatório',
    statusCode: NotFound,
  },
  ddd: { mensagem: 'O [DDD] é obrigatório', statusCode: NotFound },
  dadosPf: {
    mensagem: 'O [dadosPf] é obrigatório',
    statusCode: NotFound,
  },
};
