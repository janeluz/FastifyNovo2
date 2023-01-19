import { IUsersRepository } from "../../dto/ICreateDTO";
import { deleteFile } from "../../../../helper/file";


interface IRequest {
  id:any;
  avatar_file: any;
}

class UpdateUserAvatarUseCase {
  constructor(

    private usersRepository: IUsersRepository,
  ) { }

  async execute({ id, avatar_file }: IRequest): Promise<void> {
    console.log("testeUseCase",id, avatar_file)
    const user = await this.usersRepository.findById(id);
    console.log("testeUseCase222",id)
    if (user.avatar) {
      console.log("testeeeUseCae11",user.avatar)
      await deleteFile(`./temp/avatar/${user.avatar}`);
    }
    user.avatar = avatar_file;
    console.log("testeeeUseCae2",avatar_file)
   await this.usersRepository.create(user as any);
  }
}

export { UpdateUserAvatarUseCase };
