import { ListTasksByDoneUseCase } from "./listTaskUseCase";


class ListTasksByDoneController {
  constructor(private listTasksByDoneUseCase:ListTasksByDoneUseCase){}
  async handle(request:any, reply:any): Promise<void> {
    const { created_at, updated_at} = request.body;
    
    const task = await this.listTasksByDoneUseCase.execute(created_at,updated_at);
    reply.send(task);
    
  
  }
}
export { ListTasksByDoneController };