import { IUsersRepository } from "src/user/dto/ICreateDTO";
import { User } from "src/user/entities/userModel";
declare class ListUsersUseCase {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute(): Promise<User[]>;
}
export { ListUsersUseCase };
