
import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase";


class UpdateUserAvatarController {
  constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}
  async handle(request:any, reply:any): Promise<Response> {
  
    const {id}= request.user;
    console.log("testeId", id);
    const avatar_file = request.file.filename;
    console.log("avatar_file",request.file)

     const user = await this.updateUserAvatarUseCase.execute({
      id: id,
      avatar_file,
    });
console.log('teste',user)
    return reply.status(204).send(user);




  }
}

export { UpdateUserAvatarController };
