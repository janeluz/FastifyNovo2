

class DeleteTaskController {
   deleteTaskUseCase: any;
  
    async  handler(request: any, reply:any): Promise<Response> {
      try{
        const {id} = request.body;
     
        const deleteUser = await this.deleteTaskUseCase.execute({id});
        return reply.code(201).send(deleteUser);
      } catch(error) {
     return reply.send(400);
    
    }
    
  }
}
export { DeleteTaskController};