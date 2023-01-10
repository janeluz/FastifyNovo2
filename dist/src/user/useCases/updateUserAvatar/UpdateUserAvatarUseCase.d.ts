import { IUsersRepository } from "src/user/dto/ICreateDTO";
interface IRequest {
    id: string;
    avatar_file: string;
}
declare class UpdateUserAvatarUseCase {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute({ id, avatar_file }: IRequest): Promise<any>;
}
export { UpdateUserAvatarUseCase };
