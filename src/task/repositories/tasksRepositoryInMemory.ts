import { ICreateTaskDTO, ITasksRepository } from "../dto/ICreateDTO";
import { Task } from "../entities/task";

class TasksRepositoryInMemory implements ITasksRepository {
  update(id: string, body: any): Promise<Task> {
    throw new Error("Method not implemented.");
  }


  tasks: Task[] = [];

  async create({
    name,
    user_id,
    description,
    done:boolean,
    total
   
    



  }: ICreateTaskDTO): Promise<Task> {

    const task = new Task(name, user_id, description,false, total);

    Object.assign(task, {
      name,
      user_id,
      description,
      done:false,
      start_task: new Date(),
      end_task: new Date(),
      total,
      created_at: new Date(),
      updated_at: new Date(),

    });
    this.tasks.push(task);
    return task;
  }

  async findByName(name: string): Promise<Task> {
    const task = this.tasks.find((task) => task.name === name);
    return task as any;
  }

  async listAllTask(): Promise<Task[]> {
    return this.tasks;
  }

  findByDone(created_at?:Date): Promise<Task> {

    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<Task> {

    const task = this.tasks.find((task) => task.id === id);
    return task as any;
  }
 
  async deleteById(id: string): Promise<void> {
    await this.deleteById( id);

  }

}

export { TasksRepositoryInMemory };