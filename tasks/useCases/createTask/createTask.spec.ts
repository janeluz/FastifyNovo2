import { TasksRepositoryInMemory } from "../../repositories/tasksRepositoryInMemory";
import { CreateTaskUseCase } from "./taskUseCase";



let createTaskUseCase: CreateTaskUseCase;
let tasksRepositoryInMemory : TasksRepositoryInMemory;

describe('Create Task', () => {
  beforeEach(()=> {
    tasksRepositoryInMemory = new TasksRepositoryInMemory();
    createTaskUseCase = new CreateTaskUseCase(tasksRepositoryInMemory);

  });
  it('should be able to create a new task', async () => {
    const user = await createTaskUseCase.execute({
      name: 'testee',
      user_id: "teste@TESTE",
      description:"tarefa final curso",
      done:false,
      created_at: new Date(),
      updated_at: new Date()
    });
    console.log(user);
    expect(user).toHaveProperty('id');
  });
});
