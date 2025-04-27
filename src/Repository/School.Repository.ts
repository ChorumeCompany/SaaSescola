import { School } from '../Model/School.Model';
import { sequelize } from '../database/database';

export async function createSchoolRepository(school: School): Promise<School> {
  const t = await sequelize.transaction();
  try {
    const newSchool = await School.create(school, { transaction: t });
    await t.commit();
    return newSchool;
  } catch (e) {
    await t.rollback();
    throw e;
  }
}
export async function getAllSchoolsRepository(
  filters?: Record<string, any>, // ou um tipo mais específico se possível
): Promise<School[]> {
  try {
    const where = {};

    if (filters && Object.keys(filters).length > 0) {
      Object.assign(where, filters);
    }

    const schools = await School.findAll({ where });
    return schools;
  } catch (e) {
    console.error('Erro ao buscar as escolas', e);
    throw new Error('Erro ao buscar as escolas');
  }
}
export async function getSchoolByIdRepository(id: number): Promise<School> {
  try {
    return await School.findByPk(id);
  } catch (error) {
    console.error('Erro ao buscar a escola', error);
    throw new Error('Erro ao buscar a escola');
  }
}
export async function updateSchoolByIdRepository(
  id: number,
  school: School,
): Promise<School> {
  const t = await sequelize.transaction();
  try {
    const existingSchool = await School.findByPk(id);

    if (!existingSchool) {
      throw new Error('Escola não encontrada');
    }

    await existingSchool.update(school, { transaction: t });
    await t.commit();
    return existingSchool;
  } catch (e) {
    await t.rollback();
    console.error('Erro ao atualizar a escola', e);
    throw new Error('Erro ao atualizar a escola');
  }
}
export async function deleteSchoolRepository(id: number): Promise<School> {
  const t = await sequelize.transaction();
  try {
    const existingSchool = await School.findByPk(id);
    if (!existingSchool) {
      throw new Error('Escola não encontrada');
    }
    await existingSchool.destroy({ transaction: t });
    await t.commit();
    return existingSchool;
  } catch (e) {
    await t.rollback();
    console.error('Erro ao deletar a escola', e);
    throw new Error('Erro ao deletar a escola');
  }
}
