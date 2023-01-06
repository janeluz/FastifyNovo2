import { IUsersRepository } from "src/user/dto/ICreateDTO";
import { deleteFile } from "../../../../helper/file";


interface IRequest {
  user_id: string;
  avatar_file: string;
}

class UpdateUserAvatarUseCase {
  constructor(
  
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<any> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./temp/avatar/${user.avatar}`);
    }
    user.avatar = avatar_file;

    await this.usersRepository.create(user as any);
  }
}

export { UpdateUserAvatarUseCase };
