import { ListTasksByDoneUseCase } from "./listTaskUseCase";


class ListTasksByDoneController {
  constructor(private listTasksByDoneUseCase:ListTasksByDoneUseCase){}
  async handle(request:any, reply:any): Promise<void> {
    
    const task = await this.listTasksByDoneUseCase.execute();
    reply.send(task);
    
  
  }
}
export { ListTasksByDoneController };