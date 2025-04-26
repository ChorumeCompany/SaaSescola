import { SchoolService } from '../service/School.Service';
import type { School } from '../Model/School.Model';
import { writeJson } from '../utils/writer';
import { Created, InternalServerError } from '../utils/mensagens-ptbr';

const schoolService = new SchoolService();
export async function postNewSchool(
  req: { body: School },
  res: Response,
): Promise<boolean> {
  try {
    const school: School = req.body;

    const newSchool: School = await schoolService.postNewSchool(school);

    return writeJson(res, newSchool, Created);
  } catch (e) {
    console.error(e);
    return writeJson(res, InternalServerError);
  }
}
