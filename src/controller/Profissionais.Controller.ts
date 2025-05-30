import { writeJson } from '../utils/writer';
import { internaServerError } from '../utils/mensagens-ptbr';
import { ProfissionalService } from '../service/Profissional.Service';
import { validarCPFouCNPJ } from '../utils/documentValidator';
import type { Profissionais } from '../Model/Profissionais.Model';

const profissionalService = new ProfissionalService();
export async function createProfissonaisController(req, res) {
  try {
    const profissionail: Profissionais = req.body;

    const validaDocument = validarCPFouCNPJ(profissionail.document);
    if (validaDocument === 422) {
      return writeJson(res, { message: validaDocument.message }, 422);
    }

    const newProfissional =
      await profissionalService.createProfissionalService(profissionail);

    return writeJson(res, newProfissional);
  } catch (error) {
    console.error('Erro ao criar profissional', error);
    return writeJson(res, internaServerError);
  }
}
export async function getAllProfissionaisController(req, res) {
  try {
    const profissionais =
      await profissionalService.getAllProfissionaisService();
    return writeJson(res, profissionais);
  } catch (error) {
    console.error('Erro ao buscar os profissionais', error);
    return writeJson(res, internaServerError);
  }
}
export async function getProfissionalByIdController(req, res) {
  try {
    const id = req.params.id;
    const profissionais =
      await profissionalService.getProfissionalByIdService(id);
    return writeJson(res, profissionais);
  } catch (error) {
    console.error('Erro ao buscar os profissionais', error);
  }
}
export async function updateProfissionalByIdController(req, res) {
  try {
    const id = req.params.id;
    const profissionais = req.body;

    const updateProfissional =
      await profissionalService.updateProfissionalByIdService(
        id,
        profissionais,
      );

    return writeJson(res, updateProfissional);
  } catch (error) {
    console.error('Erro ao atualizar os profissionais', error);
    return writeJson(res, internaServerError);
  }
}
export async function deleteProfissionalController(req, res) {
  try {
    const id = req.params.id;

    const deleteProfissional =
      await profissionalService.deleteProfissionalService(id);
    return writeJson(res, deleteProfissional.Ok);
  } catch (error) {
    console.error('Erro ao deletar os profissionais', error);
    return writeJson(res, internaServerError);
  }
}
