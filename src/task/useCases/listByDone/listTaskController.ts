import { ListTasksByDoneUseCase } from "./listTaskUseCase";


class ListTasksByDoneController {
  constructor(private listTasksByDoneUseCase:ListTasksByDoneUseCase){}
  async handle(request:any, reply:any): Promise<void> {
    const done = request.params;
    const task = await this.listTasksByDoneUseCase.execute(done);
    reply.send(task);
    
  
  }
}
export { ListTasksByDoneController };