import { ITasksRepository } from "../../dto/ICreateDTO";
import { Task } from "../../entities/task";


class ListTasksByDoneUseCase {
  constructor(
    private tasksRepository: ITasksRepository
  ) { }
  async execute(): Promise<Task[]> {

    const tasksDone = this.tasksRepository.findByDone();


    return tasksDone;

  }

}

export { ListTasksByDoneUseCase };