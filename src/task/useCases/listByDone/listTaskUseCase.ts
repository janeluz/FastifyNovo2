import { ITasksRepository } from "../../dto/ICreateDTO";
import { Task } from "../../entities/task";


class ListTasksByDoneUseCase {
  constructor(
    private tasksRepository: ITasksRepository
  ) { }
  async execute(done: boolean): Promise<Task> {

    const tasksDone = this.tasksRepository.findByDone(done);


    return tasksDone;

  }

}

export { ListTasksByDoneUseCase };