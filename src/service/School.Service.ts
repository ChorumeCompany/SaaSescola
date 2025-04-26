import type { School } from '../Model/School.Model';
import { createSchoolRepository } from '../Repository/School.Repository';

export class SchoolService {
  private static instance: SchoolService;
  constructor() {
    if (SchoolService.instance) return SchoolService.instance;
    SchoolService.instance = this;
  }
  async postNewSchool(school: School): Promise<School> {
    try {
      let newSchool: School;
      newSchool = await createSchoolRepository(school);

      return newSchool;
    } catch (e) {
      console.error(e);
    }
  }
}
