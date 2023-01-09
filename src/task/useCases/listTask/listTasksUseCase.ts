import { ITasksRepository } from "../../dto/ICreateDTO";
import { Task } from "../../entities/task";


class ListTasksUseCase {
  constructor(
    private tasksRepository: ITasksRepository
  ) { }
  async execute(): Promise<Task[]> {
    const tasks = this.tasksRepository.listAllTask();
    return tasks;
  }

}

export { ListTasksUseCase };