import { IUsersRepository } from "../../dto/ICreateDTO";
interface IRequest {
    id: any;
    avatar: any;
}
declare class UpdateUserAvatarUseCase {
    private usersRepository;
    constructor(usersRepository: IUsersRepository);
    execute({ id, avatar }: IRequest): Promise<void>;
}
export { UpdateUserAvatarUseCase };
