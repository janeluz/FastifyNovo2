import { IUsersRepository } from "src/user/dto/ICreateDTO";
import { User } from "src/user/entities/userModel";

class ListUsersUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) { }
  async execute(): Promise<User[]> {
    const user = this.usersRepository.listAllUser();
    return user;
  }

}

export { ListUsersUseCase };