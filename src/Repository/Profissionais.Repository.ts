import { Profissionais } from '../Model/Profissionais.Model';
import { sequelize } from '../database/database';

export async function createProfissionalRepository(
  profissionais: Profissionais,
): Promise<Profissionais> {
  const t = await sequelize.transaction();
  try {
    const newProfissional = await Profissionais.create(profissionais);
    await t.commit();
    return newProfissional;
  } catch (error) {
    await t.rollback();
    console.error('Erro ao criar profissional', error);
    throw error;
  }
}
export async function getAllProfissionaisRepository(): Promise<
  Profissionais[]
> {
  try {
    return await Profissionais.findAll();
  } catch (error) {
    console.error('Erro ao buscar os profissionais', error);
    throw error;
  }
}
export async function getProfissionalByIdRepository(
  id: number,
): Promise<Profissionais> {
  try {
    return await Profissionais.findByPk(id);
  } catch (error) {
    console.error('Erro ao buscar os profissionais', error);
    throw error;
  }
}
export async function updateProfissionalByIdRepository(
  id: number,
  profissional: Profissionais,
): Promise<Profissionais> {
  const t = await sequelize.transaction();
  try {
    const existingProfissional = await Profissionais.findByPk(id);
    if (!existingProfissional) {
      return null;
    }

    await existingProfissional.update(profissional);
    await t.commit();
    return existingProfissional;
  } catch (error) {
    await t.rollback();
    console.error('Erro ao atualizar os profissionais', error);
    throw error;
  }
}
export async function deleteProfissionalRepository(id: number): Promise<void> {
  const t = await sequelize.transaction();
  try {
    const existingProfissional = await Profissionais.findByPk(id);
    if (!existingProfissional) {
      return null;
    }
    return await existingProfissional.destroy({ transaction: t });
  } catch (error) {
    await t.rollback();
    console.error('Erro ao deletar os profissionais', error);
    throw error;
  }
}
