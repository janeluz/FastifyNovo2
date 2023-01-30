import { Task } from "src/task/entities/task";
import { ListTasksByDoneUseCase } from "./listTaskUseCase";


class ListTasksByDoneController {
  constructor(private listTasksByDoneUseCase:ListTasksByDoneUseCase){}
  async handle(request:any, reply:any): Promise<Task> {
    const  created_at = request.body;
    
    const task = await this.listTasksByDoneUseCase.execute(created_at);
     return reply.send(task);
    
  
  }
}
export { ListTasksByDoneController };