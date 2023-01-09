import { UpdateTaskUseCase } from "./updateTaskUseCase";


class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  async handle(request: any, reply: any): Promise<Response> {
    const  {id}  = request.params;
    const { name, description, done } = request.body;

    try {
      await this.updateTaskUseCase.execute(id, { name, description, done })
        return reply.code(200).send();
    } catch (error) {
        return reply.code(400).send();
        }
    }

}

export { UpdateTaskController };