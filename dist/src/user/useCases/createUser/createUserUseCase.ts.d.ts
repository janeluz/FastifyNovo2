import { ICreateUserDTO, IUsersRepository } from "src/user/dto/ICreateDTO";
import { User } from "src/user/entities/userModel";
declare class CreateUserUseCase {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute({ name, email, password, confirmPassword, isAdmin, departament }: ICreateUserDTO): Promise<User>;
}
export { CreateUserUseCase };
