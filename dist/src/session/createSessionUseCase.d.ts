import { UsersRepository } from "../user/repositories/usersRepository";
interface IRequest {
    email: string;
    password: string;
}
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
    execute({ email, password }: IRequest): Promise<IResponse>;
}
export { CreateSessionUseCase };
