
import { User } from "src/user/dto/userModel";
import { ListUserByIdUseCase } from "./listByIdUseCase";



class ListUserByIdController {
  constructor(private listUserByIdUseCase: ListUserByIdUseCase) { }
  async handle(request: any, reply: any): Promise<User> {
    const id = request.params.id;
    const user = await this.listUserByIdUseCase.execute(id);
    return reply.code(200).send(user);

  }
}
export { ListUserByIdController };