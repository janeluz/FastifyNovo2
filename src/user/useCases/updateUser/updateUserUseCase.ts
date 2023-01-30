import { IUsersRepository } from "../../../../src/user/dto/ICreateDTO";
import { User } from "../../entities/userModel";


class UpdateUserUseCase {

    constructor( private usersRepository: IUsersRepository){}
    
  async execute(id: string, body: any):Promise<User> {
        
      await this.usersRepository.findById(id);
        
       const updateUser = await this.usersRepository.update(id, body);

        return updateUser;
        
    }
    
}

export { UpdateUserUseCase };