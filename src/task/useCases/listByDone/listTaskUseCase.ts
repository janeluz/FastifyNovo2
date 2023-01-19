import { ITasksRepository } from "../../dto/ICreateDTO";
import { Task } from "../../entities/task";


class ListTasksByDoneUseCase {
  constructor(
    private tasksRepository: ITasksRepository
  ) { }
  async execute(created_at:Date,updated_at:Date): Promise<Task[]> {

    const tasksDone = this.tasksRepository.findByDone(created_at,updated_at);


    return tasksDone;

  }

}

export { ListTasksByDoneUseCase };