import type { Profissionais } from '../Model/Profissionais.Model';
import {
  created,
  internaServerError,
  notFound,
  ok,
} from '../utils/mensagens-ptbr';
import {
  createProfissionalRepository,
  deleteProfissionalRepository,
  getAllProfissionaisRepository,
  getProfissionalByIdRepository,
  updateProfissionalByIdRepository,
} from '../Repository/Profissionais.Repository';

export class ProfissionalService {
  private static instance: ProfissionalService;
  constructor() {
    if (ProfissionalService.instance) return ProfissionalService.instance;
    ProfissionalService.instance = this;
  }
  async createProfissionalService(profissional: Profissionais) {
    try {
      const newProfissional = await createProfissionalRepository(profissional);

      return {
        Created: created,
        newProfissional,
      };
    } catch (error) {
      console.error('Erro ao criar profissional', error);
      return { error, InternalServerError: internaServerError };
    }
  }
  async getAllProfissionaisService() {
    try {
      const allProfissionais = await getAllProfissionaisRepository();

      if (!allProfissionais) {
        return { NotFound: notFound };
      }

      return { Ok: ok, allProfissionais };
    } catch (error) {
      console.error('Erro ao buscar os profissionais', error);
      return { error, InternalServerError: internaServerError };
    }
  }
  async getProfissionalByIdService(id: number) {
    try {
      const profissionais = await getProfissionalByIdRepository(id);

      if (!profissionais) {
        return { NotFound: notFound };
      }

      return { Ok: ok, profissionais };
    } catch (error) {
      console.error('Erro ao buscar os profissionais', error);
      return { error, InternalServerError: internaServerError };
    }
  }
  async updateProfissionalByIdService(
    id: number,
    profissionais: Profissionais,
  ) {
    try {
      const updateProfissional = await updateProfissionalByIdRepository(
        id,
        profissionais,
      );
      if (!updateProfissional) {
        return { NotFound: notFound };
      }
      return { Ok: ok, updateProfissional };
    } catch (error) {
      console.error('Erro ao atualizar os profissionais', error);
      return { error, InternalServerError: internaServerError };
    }
  }
  async deleteProfissionalService(id: number) {
    try {
      const deleteProfissional = await deleteProfissionalRepository(id);

      return { Ok: ok, deleteProfissional };
    } catch (error) {
      console.error('Erro ao deletar os profissionais', error);
    }
  }
}
