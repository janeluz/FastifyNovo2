import { IUsersRepository } from "../../dto/ICreateDTO";
interface IRequest {
    id: any;
    avatar_file: any;
}
declare class UpdateUserAvatarUseCase {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute({ id, avatar_file }: IRequest): Promise<void>;
}
export { UpdateUserAvatarUseCase };
