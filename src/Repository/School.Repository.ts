import { School } from '../Model/School.Model';
import { sequelize } from '../database/database';

export async function createSchoolRepository(school: School): Promise<School> {
  const t = await sequelize.transaction();
  try {
    let newSchool: School;
    newSchool = await School.create(school, { transaction: t });

    return newSchool;
  } catch (e) {
    throw e;
  }
}
