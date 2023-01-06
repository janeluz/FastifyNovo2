import { ListTasksUseCase } from "./listTaskUseCase";


class ListTasksController {
  constructor(private listTasksUseCase:ListTasksUseCase){}
  async handle(request:any, reply:any): Promise<void> {

    const tasks = await this.listTasksUseCase.execute();
    reply.send(tasks);
    
  
  }
}
export { ListTasksController };