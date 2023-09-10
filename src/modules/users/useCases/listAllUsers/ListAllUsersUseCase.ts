import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const foundUser = this.usersRepository.findById(user_id);
    if (!foundUser.admin) {
      throw new Error("Not Authorized");
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
