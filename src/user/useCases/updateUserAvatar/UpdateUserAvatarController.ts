import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";



class UpdateUserAvatarController {
  constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}
  async handle(request: any, reply:any): Promise<Response> {
  
    const { id } = request.user;
    const avatar_file = request.file.filename;

     const user = await this.updateUserAvatarUseCase.execute({
      user_id: id,
      avatar_file,
    });

    return reply.status(204).send(user);


  }
}

export { UpdateUserAvatarController };
