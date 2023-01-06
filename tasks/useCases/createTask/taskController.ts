import { CreateTaskUseCase } from "./taskUseCase";


class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase){}
 
   async  handle(request: any, reply:any): Promise<void> {
      try{
        const {name,user_id,description,done} = request.body;
     
        const newTask = await this.createTaskUseCase.execute({name,user_id,description,done});
        return reply.code(201).send(newTask);
      } catch(error) {
    reply.send(400);
    }
  }
}
export { CreateTaskController};