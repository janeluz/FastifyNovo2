import { ICreateTaskDTO, ITasksRepository } from "../../dto/ICreateDTO";
import { Task } from "../../entities/task";



class CreateTaskUseCase {
  constructor(private taskRepository: ITasksRepository){

}
async execute({ name,user_id,description,done}: ICreateTaskDTO) :Promise<Task>{

const taskAlreadyExists = this.taskRepository.findByName(name);

if( await taskAlreadyExists) {
 new Error(" task Already exists!");
}

 const task = this.taskRepository.create({name,user_id,description,done});

return task;

}
}
export { CreateTaskUseCase};