

import { UpdateUserAvatarUseCase } from "../updateUserAvatar/UpdateUserAvatarUseCase"


class UpdateUserAvatarController {
  constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}
  async handle(request:any, reply:any): Promise<Response> {
    const { id }= request.user;
    const avatar = request.file;
    console.log('debug avatar', avatar)
    console.log("debug controller request.file", request.file)

     const user = await this.updateUserAvatarUseCase.execute({
      id: id,
      avatar,
    });
    return reply.code(204).send(user);
  }
}

export { UpdateUserAvatarController };
