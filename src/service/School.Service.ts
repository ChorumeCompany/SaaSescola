import type { School } from '../Model/School.Model';
import {
  createSchoolRepository,
  deleteSchoolRepository,
  getAllSchoolsRepository,
  getSchoolByIdRepository,
  updateSchoolByIdRepository,
} from '../Repository/School.Repository';
import { Created, NotFound, Ok } from '../utils/mensagens-ptbr';

export class SchoolService {
  private static instance: SchoolService;
  constructor() {
    if (SchoolService.instance) return SchoolService.instance;
    SchoolService.instance = this;
  }
  async postNewSchoolService(school: School) {
    try {
      let newSchool: School;
      newSchool = await createSchoolRepository(school);

      return { newSchool, Created };
    } catch (error) {
      console.error('Erro ao cadastrar a escola', error);
    }
  }
  async getAllSchoolService(filters?: Record<string, any>) {
    try {
      const schools = await getAllSchoolsRepository(filters);

      return { schools, Ok };
    } catch (error) {
      console.error('Erro ao buscar as escolas', error);
      return error;
    }
  }
  async getSchoolByIdService(id: number) {
    try {
      const school = await getSchoolByIdRepository(id);
      if (!school) return { NotFound };

      return { school, Ok };
    } catch (error) {
      console.error('Erro ao buscar a escola', error);
      return error;
    }
  }
  async updateSchoolService(id: number, school: School) {
    try {
      const updateSchool = await updateSchoolByIdRepository(id, school);
      if (!updateSchool) return { NotFound };
      return { updateSchool, Ok };
    } catch (error) {
      console.error('Erro ao atualizar a escola', error);
      return error;
    }
  }
  async deletedSchoolService(id: number) {
    try {
      const deleteSchool = await deleteSchoolRepository(id);
      if (!deleteSchool) return { NotFound };
      return { deleteSchool, Ok };
    } catch (error) {
      console.error('Erro ao deletar a escola', error);
      return error;
    }
  }
}
