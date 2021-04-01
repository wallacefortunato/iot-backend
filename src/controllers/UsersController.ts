import { Request, Response } from "express";
import CreateUsersService from "../services/CreateUserService";

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUsersService();
    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json({ user });
  }
}
export default UsersController;
