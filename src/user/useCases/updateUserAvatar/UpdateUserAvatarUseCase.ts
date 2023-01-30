import { IUsersRepository } from "../../dto/ICreateDTO";
import { deleteFile } from "../../../../helper/file";


interface IRequest {
  id:any;
  avatar: any;
}

class UpdateUserAvatarUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id, avatar }: IRequest): Promise<void> {
    console.log("debug usecase avatar", avatar)
    console.log("debug usecase id", id)

    const user = await this.usersRepository.findById(id);

    if (user.avatar) {
      await deleteFile(`./temp/avatar/${user.avatar}`);
    }

    user.avatar = avatar;
    await this.usersRepository.updateAvatar(id,avatar);
  }
}

export { UpdateUserAvatarUseCase };
