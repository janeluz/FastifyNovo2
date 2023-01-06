import { IUsersRepository } from "src/user/dto/ICreateDTO";
interface IRequest {
    user_id: string;
    avatar_file: string;
}
declare class UpdateUserAvatarUseCase {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute({ user_id, avatar_file }: IRequest): Promise<any>;
}
export { UpdateUserAvatarUseCase };
