import { UsersRepository } from "../user/repositories/usersRepository";
interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
declare class CreateSessionUseCase {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    execute(email: string, password: string): Promise<IResponse>;
}
export { CreateSessionUseCase };
