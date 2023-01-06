import { IUsersRepository } from "src/user/dto/ICreateDTO";
import { User } from "src/user/dto/userModel";


class ListUserByIdUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) { }
  async execute(id: string): Promise<User> {
    const user = this.usersRepository.findById(id);
    return user;
  }

}

export { ListUserByIdUseCase };