import {
  createUserController,
  loginController,
} from '../controller/Login.Controller';
import {
  deleteSchoolbyIdController,
  getAllSchoolController,
  getSchoolByIdController,
  postNewSchoolController,
  updateSchoolbyIdController,
} from '../controller/School.Controller';

export const controllers = {
  loginController,
  createUserController,

  postNewSchoolController,
  getAllSchoolController,
  getSchoolByIdController,
  updateSchoolbyIdController,
  deleteSchoolbyIdController,
};
