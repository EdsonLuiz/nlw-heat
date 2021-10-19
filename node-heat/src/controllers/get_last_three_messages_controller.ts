import { Request, Response } from "express";
import { GetLastThreeMessagesService } from "../services/get_last_three_messages";

class GetLastThreeMessagesController {
  async handle(req: Request, res: Response) {
    const service = new GetLastThreeMessagesService()
    const result = await service.execute()

    return res.json(result)    
  }
}

export {GetLastThreeMessagesController}