import { hash } from "bcryptjs";
import { ICreateUserDTO, IUsersRepository } from "src/user/dto/ICreateDTO";
import { User } from "src/user/dto/userModel";



class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ name, email, password,confirmPassword,avatar, isAdmin, departament }: ICreateUserDTO): Promise<User> {

    const usersAlreadyExists = await this.usersRepository.findByEmail(email);

    if ( usersAlreadyExists) {
      throw new Error(" user Already exists!");
    }
    if (password != confirmPassword) {
      throw new Error("Password does not match!");
    }
    const passwordHash = await hash(password, 8);
    const user = this.usersRepository.create({ name, email, password: passwordHash, avatar, isAdmin, departament });

    return user;

  }
}
export { CreateUserUseCase };