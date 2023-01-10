import { UpdateUserUseCase } from "./updateUserUseCase";


class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) {}
  
    async handle(request: any, reply: any): Promise<Response> {
      const  {id}  = request.params;
      const { name,email,password} = request.body;
  
      try {
        await this.updateUserUseCase.execute(id, { name, email,password})
          return reply.code(200).send();
      } catch (error) {
          return reply.code(400).send();
          }
      }
  
  }
  
  export { UpdateUserController };