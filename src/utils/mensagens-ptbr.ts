export const internaServerError = {
  message: 'Internal Server Error.',
  statusCode: 500,
  img: `https://http.cat/status/500`,
};
export const notFound = {
  message: 'Not Found.',
  statusCode: 404,
  img: `https://http.cat/status/404`,
};
export const badRequest = {
  message: 'Bad Request.',
  statusCode: 400,
  img: `https://http.cat/status/400`,
};
export const created = {
  message: 'Created.',
  statusCode: 201,
  img: `https://http.cat/status/201`,
};
export const unauthorized = {
  message: 'Unauthorized.',
  statusCode: 401,
  img: `https://http.cat/status/401`,
};
export const ok = {
  message: 'Ok.',
  statusCode: 200,
  img: `https://http.cat/status/200`,
};
export const unprocessableEntity = {
  message: 'Unprocessable Entity.',
  statusCode: 422,
  img: `https://http.cat/status/422`,
};
export const tokenExpired = {
  message: 'Token Expired.',
  statusCode: 498,
  img: `https://http.cat/status/498`,
};
export const noContent = {
  message: 'No Content.',
  statusCode: 204,
  img: `https://http.cat/status/204`,
};
export const accepted = {
  message: 'Accepted.',
  statusCode: 202,
  img: `https://http.cat/status/202`,
};

export const validacao = {
  //obrigatório
  idCliente: { mensagem: 'o [idCliente] é obrigatório', statusCode: notFound },
  idSimulacao: {
    mensagem: 'o [idSimulacao] é obrigatório',
    statusCode: notFound,
  },
  idCarctr: { mensagem: 'O [idCarctr] é obrigatório', statusCode: notFound },
  Login: { mensagem: 'o [Login] é obrigatório', statusCode: notFound },
  clientId: { mensagem: 'o [clientId] é obrigatório', statusCode: notFound },
  cdConven: { mensagem: 'O [cdConven] é obrigatório', statusCode: notFound },
  cdProdut: { mensagem: 'O [cdProdut] é obrigatório', statusCode: notFound },
  cdCvcons: { mensagem: 'O [cdCvcons] é obrigatório', statusCode: notFound },
  dtVct1ap: { mensagem: 'O [dtVct1ap] é obrigatório', statusCode: notFound },
  dtVctult: { mensagem: 'O [dtVctult] é obrigatório', statusCode: notFound },
  vlTotal: { mensagem: 'O [vlTotal] é obrigatório', statusCode: notFound },
  vlSeguro: { mensagem: 'O [vlSeguro] é obrigatório', statusCode: notFound },
  vlPresta: { mensagem: 'O [vlPresta] é obrigatório', statusCode: notFound },
  vlOutvlr: { mensagem: 'O [vlOutvlr] é obrigatório', statusCode: notFound },
  vlLiquid: { mensagem: 'O [vlLiquid] é obrigatório', statusCode: notFound },
  vlJuros: { mensagem: 'O [vlJuros] é obrigatório', statusCode: notFound },
  vlIofCob: { mensagem: 'O [vlIofCob] é obrigatório', statusCode: notFound },
  vlFinan: { mensagem: 'O [vlFinan] é obrigatório', statusCode: notFound },
  vlContra: { mensagem: 'O [vlContra] é obrigatório', statusCode: notFound },
  vlConces: { mensagem: 'O [vlConces] é obrigatório', statusCode: notFound },
  txRefCdc: { mensagem: 'O [txRefCdc] é obrigatório', statusCode: notFound },
  txFinmes: { mensagem: 'O [txFinmes] é obrigatório', statusCode: notFound },
  txFinano: { mensagem: 'O [txFinano] é obrigatório', statusCode: notFound },
  txCetMes: { mensagem: 'O [txCetMes] é obrigatório', statusCode: notFound },
  txCetAno: { mensagem: 'O [txCetAno] é obrigatório', statusCode: notFound },
  qtPresta: { mensagem: 'O [qtPresta] é obrigatório', statusCode: notFound },
  dtContra: { mensagem: 'O [dtContra] é obrigatório', statusCode: notFound },
  orchestratorId: {
    mensagem: 'O [orchestratorId] é obrigatório',
    statusCode: notFound,
  },
  simulationId: {
    mensagem: 'O [simulationId] é obrigatório',
    statusCode: notFound,
  },

  idPrestResponse: {
    mensagem: 'O [idPrestResponse] é obrigatório',
    statusCode: notFound,
  },
  nrTxmax: { mensagem: 'O [nrTxmax] é obrigatório', statusCode: notFound },
  nrTxmin: { mensagem: 'O [nrTxmin] é obrigatório', statusCode: notFound },
  qtPrestmax: {
    mensagem: 'O [qtPrestmax] é obrigatório',
    statusCode: notFound,
  },
  qtPrestmin: {
    mensagem: 'O [qtPrestmin] é obrigatório',
    statusCode: notFound,
  },
  qtRegist: { mensagem: 'O [qtRegist] é obrigatório', statusCode: notFound },
  vlFinanc: { mensagem: 'O [vlFinanc] é obrigatório', statusCode: notFound },
  simulationStatusId: {
    mensagem: 'O [simulationStatusId] é obrigatório',
    statusCode: notFound,
  },
  cpf: { mensagem: 'O [cpf] é obrigatório', statusCode: notFound },
  name: { mensagem: 'O [name] é obrigatório', statusCode: notFound },
  statusId: { mensagem: 'O [statusId] é obrigatório', statusCode: notFound },
  phone: { mensagem: 'O [phone] é obrigatório', statusCode: notFound },
  password: { mensagem: 'O [password] é obrigatório', statusCode: notFound },
  email: { mensagem: 'O [email] é obrigatório', statusCode: notFound },
  roleId: { mensagem: 'O [roleId] é obrigatório', statusCode: notFound },
  companyId: { mensagem: 'O [companyId] é obrigatório', statusCode: notFound },
  identity: { mensage: 'O [identity] é obrigatório', statusCode: notFound },
  birthDate: { mensage: 'O [birthDate] é obrigatório', statusCode: notFound },
  genderId: { mensage: 'O [genderId] é obrigatório', statusCode: notFound },
  maritalStatusId: {
    mensage: 'O [maritalStatusId] é obrigatório',
    statusCode: notFound,
  },
  personTypeId: {
    mensage: 'O [personTypeId] é obrigatório',
    statusCode: notFound,
  },
  mainPhone: { mensage: 'O [mainPhone] é obrigatório', statusCode: notFound },
  mainEmail: { mensage: 'O [mainEmail] é obrigatório', statusCode: notFound },
  mainAddressId: {
    mensage: 'O [mainAddressId] é obrigatório',
    statusCode: notFound,
  },
  bankDataId: { mensage: 'O [bankDataId] é obrigatório', statusCode: notFound },
  street: { mensagem: 'O [street] é obrigatório', statusCode: notFound },
  number: { mensagem: 'O [number] é obrigatório', statusCode: notFound },
  neighborhood: {
    mensagem: 'O [neighborhood] é obrigatório',
    statusCode: notFound,
  },
  city: { mensagem: 'O [city] é obrigatório', statusCode: notFound },
  state: { mensagem: 'O [state] é obrigatório', statusCode: notFound },
  postalCode: {
    mensagem: 'O [cep] é obrigatório',
    statusCode: notFound,
  },
  cnpj: { mensagem: 'O [cnpj] é obrigatório', statusCode: notFound },
  tipoCompany: {
    mensagem: 'O [tipoCompany] é obrigatório',
    statusCode: notFound,
  },
  ddd: { mensagem: 'O [DDD] é obrigatório', statusCode: notFound },
  dadosPf: {
    mensagem: 'O [dadosPf] é obrigatório',
    statusCode: notFound,
  },
};
