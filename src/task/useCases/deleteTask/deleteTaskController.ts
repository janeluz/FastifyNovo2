import { DeleteTaskUseCase } from "./deleteTaskUseCase";


class DeleteTaskController {
   constructor(private deleteTaskUseCase: DeleteTaskUseCase){}
  
    async handle(request: any, reply:any): Promise<void> {
      try{
        const {id} = request.params;
     
         await this.deleteTaskUseCase.execute(id);
        return reply.code(201).send();
      } catch(error) {
     return reply.send(400);
    
    }
    
  }
}
export { DeleteTaskController};