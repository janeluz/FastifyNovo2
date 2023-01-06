import { IUsersRepository } from "src/user/dto/ICreateDTO";
import { User } from "src/user/dto/userModel";
declare class ListUserByIdUseCase {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute(id: string): Promise<User>;
}
export { ListUserByIdUseCase };
