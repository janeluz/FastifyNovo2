import { ICreateTaskDTO, ITasksRepository } from "../../dto/ICreateDTO";
import { Task } from "../../entities/task";



class CreateTaskUseCase {
  constructor(private taskRepository: ITasksRepository) {

  }
  async execute({ name, user_id, description,done,total}: ICreateTaskDTO): Promise<Task> {
 
    const taskAlreadyExists = this.taskRepository.findByName(name);
    console.log("UseCase",taskAlreadyExists)
    if (await taskAlreadyExists) {
      new Error(" task Already exists!");
    }

    const task = this.taskRepository.create({ name, user_id, description,done,total});
   console.log("UseCase",task)

    return task;

  }
}
export { CreateTaskUseCase };