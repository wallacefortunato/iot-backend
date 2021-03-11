import { Request, Response } from 'express';
import Diary from 'models/Diary';
import Measurement from 'models/Measurement';
import { getRepository } from 'typeorm';
class ChartDiariesPatientController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { patient_id } = request.params;
    const diariesRepository = getRepository(Diary);
    const diaries = await diariesRepository.find({
      where: {
        patient_id,
      },
      order: {
        created_at: 'ASC',
      },
    });

    return response.json(diaries);
  }
}

export default ChartDiariesPatientController;
