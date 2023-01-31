import { ITasksRepository } from "../../dto/ICreateDTO";
import { Task } from "../../entities/task";


class ListTasksByDoneUseCase {
  constructor(
    private tasksRepository: ITasksRepository
  ) { }
  async execute(start_task:Date): Promise<Task> {

    const tasksDone = this.tasksRepository.findByDone(start_task);
     return tasksDone;

    //  if(start_task < end_task){
    //   done = true
    //  }
    

  }

}

export { ListTasksByDoneUseCase };