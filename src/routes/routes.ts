import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  loginController,
  updateUserController,
} from '../controller/Login.Controller';
import {
  deleteSchoolbyIdController,
  getAllSchoolController,
  getSchoolByIdController,
  postNewSchoolController,
  updateSchoolbyIdController,
} from '../controller/School.Controller';
import {
  createProfissonaisController,
  deleteProfissionalController,
  getAllProfissionaisController,
  getProfissionalByIdController,
  updateProfissionalByIdController,
} from '../controller/Profissionais.Controller';

export const controllers = {
  loginController,
  createUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,

  postNewSchoolController,
  getAllSchoolController,
  getSchoolByIdController,
  updateSchoolbyIdController,
  deleteSchoolbyIdController,

  createProfissonaisController,
  getAllProfissionaisController,
  getProfissionalByIdController,
  updateProfissionalByIdController,
  deleteProfissionalController,
};
