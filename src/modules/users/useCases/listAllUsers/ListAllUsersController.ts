import { Request, Response } from "express";

import { ListAllUsersUseCase, IRequest } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const userId = request.headers.user_id?.toString();
    try {
      const users = this.listAllUsersUseCase.execute({ user_id: userId });
      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
