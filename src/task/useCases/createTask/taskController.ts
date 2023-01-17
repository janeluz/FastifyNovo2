import { addTask } from "../../../../src/plugin/validationTasks";
import { Task } from "../../entities/task";
import { CreateTaskUseCase } from "./taskUseCase";


class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) { }

  async handle(request: any, reply: any): Promise<Task> {
    try {
      const { name, user_id, description, done } = addTask.parse(request.body);

      const task = await this.createTaskUseCase.execute({ name, user_id, description, done });
  
      return reply.code(201).send("task created with success!");
    } catch (error) {
      return reply.code(400);
    }
  }
}
export { CreateTaskController };