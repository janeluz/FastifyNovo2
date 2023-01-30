
import { User } from "src/user/entities/userModel";
import { ListUsersUseCase } from "./listUsersUseCase";

class ListUserController {
  constructor(private listUsersUseCase: ListUsersUseCase) { }
 
  async handle(request: any, reply: any): Promise<User[]> {

    const user = await this.listUsersUseCase.execute();
    return reply.code(200).send(user);


  }
}
export { ListUserController };
