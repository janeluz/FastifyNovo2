
import { FastifyRequest } from "fastify";
import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase";



class UpdateUserAvatarController {
  constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}
  async handle(request:any, reply:any): Promise<Response> {
  
    const {id } = request.user;
    const avatar_file = request.file.filename;

     const user = await this.updateUserAvatarUseCase.execute({
      id: id,
      avatar_file,
    });
console.log('teste',user)
    return reply.status(204).send(user);




  }
}

export { UpdateUserAvatarController };
