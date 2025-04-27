import type { Profissionais } from '../Model/Profissionais.Model';
import {
  Created,
  InternalServerError,
  NotFound,
  Ok,
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
        Created,
        newProfissional,
      };
    } catch (error) {
      console.error('Erro ao criar profissional', error);
      return { error, InternalServerError };
    }
  }
  async getAllProfissionaisService() {
    try {
      const allProfissionais = await getAllProfissionaisRepository();

      if (!allProfissionais) {
        return { NotFound };
      }

      return { Ok, allProfissionais };
    } catch (error) {
      console.error('Erro ao buscar os profissionais', error);
      return { error, InternalServerError };
    }
  }
  async getProfissionalByIdService(id: number) {
    try {
      const profissionais = await getProfissionalByIdRepository(id);

      if (!profissionais) {
        return { NotFound };
      }

      return { Ok, profissionais };
    } catch (error) {
      console.error('Erro ao buscar os profissionais', error);
      return { error, InternalServerError };
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
        return { NotFound };
      }
      return { Ok, updateProfissional };
    } catch (error) {
      console.error('Erro ao atualizar os profissionais', error);
      return { error, InternalServerError };
    }
  }
  async deleteProfissionalService(id: number) {
    try {
      const deleteProfissional = await deleteProfissionalRepository(id);

      return { Ok, deleteProfissional };
    } catch (error) {
      console.error('Erro ao deletar os profissionais', error);
    }
  }
}
