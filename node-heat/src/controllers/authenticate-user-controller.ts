import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/authenticate-user-service";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const {code} = req.body
    const service = new AuthenticateUserService()

    try {
      const result = await service.execute(code)
      res.json(result)
    } catch (error) {
      return res.json({error: error.message})
    }

  }
}

export {AuthenticateUserController}