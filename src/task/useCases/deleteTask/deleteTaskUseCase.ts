
import { ITasksRepository } from "../../dto/ICreateDTO";


class DeleteTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) { }
  async execute(id: string): Promise<void> {

    const verifyTask = await this.tasksRepository.findById(id);
    if (!verifyTask) {
      throw new Error(" Task not exists");
    }
    const user = await this.tasksRepository.deleteById(id);
    return user;

  }
}
export { DeleteTaskUseCase };