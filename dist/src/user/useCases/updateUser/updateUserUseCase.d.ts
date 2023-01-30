import { IUsersRepository } from "../../../../src/user/dto/ICreateDTO";
import { User } from "../../entities/userModel";
declare class UpdateUserUseCase {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute(id: string, body: any): Promise<User>;
}
export { UpdateUserUseCase };
