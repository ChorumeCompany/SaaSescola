import { SchoolService } from '../service/School.Service';
import type { School } from '../Model/School.Model';
import { writeJson } from '../utils/writer';
import { InternalServerError } from '../utils/mensagens-ptbr';

const schoolService = new SchoolService();
export async function postNewSchoolController(req, res): Promise<boolean> {
  try {
    const school: School = req.body;

    const newSchool = await schoolService.postNewSchoolService(school);

    return writeJson(res, newSchool);
  } catch (e) {
    console.error(e);
    return writeJson(res, InternalServerError);
  }
}
export async function getAllSchoolController(req, res) {
  try {
    const filtersKey = [
      'name',
      'esferaAdministrativa',
      'valorMensalidade',
      'situacaoFuncionamento',
      'qntSalas',
      'qntAlunos',
      'qntProfessores',
      'qntTurmas',
      'qntFuncionarios',
      'temQuadraCoberta',
      'temQuadraNaoCoberta',
      'temInternet',
      'temBandaLarga',
      'temLaboratorioInformatica',
      'temLaboratorioCiencia',
      'temRefeitorio',
      'temAuditorio',
      'temDespensa',
      'temAumoxarifado',
      'temPatioCoberto',
      'temPatioNaoCoberto',
      'temPatioInfantil',
      'temCozinha',
      'temBiblioteca',
      'temSanitarioNoPredio',
      'temSanitarioForaPredio',
      'temBercario',
      'temSalaLeitura',
      'temAreaVerde',
      'temAguaFiltrada',
      'temCreche',
      'temEnsinoFundamental',
      'temEnsinoMedio',
      'temEnsinoMedioNormal',
      'temEnsinoMedioProfissional',
      'temEnsinoMedioIntegrado',
      'temEducacaoJovemAdulto',
      'temEducacaoIndigena',
      'banheiroTemChuveiro',
      'ofereceAlimentacao',
      'acessoCadeirante',
      'pisoTatil',
      'banheiroAcessivel',
      'elevador',
      'salaDescompressao',
      'pessoaDeLibras',
      'acompanhanteParaAlunos',
    ];
    const filter = filtersKey.reduce((acc, key) => {
      if (req.query[key]) acc[key] = req.query[key];
      return acc;
    }, {});
    console.log(filter);
    const schools = await schoolService.getAllSchoolService(filter);

    return writeJson(res, schools);
  } catch (error) {
    console.error('erro ao cadastrar a escola', error);
    return writeJson(res, InternalServerError);
  }
}
export async function getSchoolByIdController(req, res) {
  try {
    const id = req.params.id;

    const school = await schoolService.getSchoolByIdService(id);

    return writeJson(res, school);
  } catch (error) {
    console.error('Erro ao buscar a escola', error);
    return writeJson(res, InternalServerError);
  }
}
export async function updateSchoolbyIdController(req, res) {
  try {
    const id = req.params.id;
    const school = req.body;

    const updateScholl = await schoolService.updateSchoolService(id, school);

    return writeJson(res, updateScholl);
  } catch (error) {
    console.error('Erro ao atualizar a escola', error);
    return writeJson(res, InternalServerError);
  }
}
export async function deleteSchoolbyIdController(req, res) {
  try {
    const id = req.params.id;

    const deletedSchool = await schoolService.deletedSchoolService(id);

    return writeJson(res, deletedSchool);
  } catch (error) {
    console.error('Erro ao deletar a escola', error);
    return writeJson(res, InternalServerError);
  }
}
