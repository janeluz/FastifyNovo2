import { Task } from "src/task/entities/task";
import { ListTasksByDoneUseCase } from "./listTaskUseCase";


class ListTasksByDoneController {
  constructor(private listTasksByDoneUseCase:ListTasksByDoneUseCase){}
  async handle(request:any, reply:any): Promise<Task> {
    const  start_task = request.body;
    
    const task = await this.listTasksByDoneUseCase.execute(start_task);
     return reply.send(task);
    
  
  }
}
export { ListTasksByDoneController };