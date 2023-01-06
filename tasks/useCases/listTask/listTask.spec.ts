import { TasksRepositoryInMemory } from "../../repositories/tasksRepositoryInMemory";
import { ListTasksUseCase } from "./listTaskUseCase";

let listTasksUseCase:ListTasksUseCase;
let tasksRepositoryInMemory:TasksRepositoryInMemory;


describe("List tasks", () => {
 
    beforeEach(()=> {
       tasksRepositoryInMemory = new TasksRepositoryInMemory();
       listTasksUseCase = new ListTasksUseCase(tasksRepositoryInMemory);

     
    });

    it("should be able list task", async () => {

      const task = await tasksRepositoryInMemory.create({
        name: 'testee',
        user_id:'df478a83-2ae0-4117-97f1-cbf8eb27d8a8',
        description: 'Criar testes',
        done: false,
        created_at: new Date(),
        updated_at: new Date()
        
      });
      const tasks = await listTasksUseCase.execute();
      //eu espero que retorne a task
      expect(tasks).toEqual([task]);
  });
//   it("should be able to list all available users by name", async() => {
//     const task = await tasksRepositoryInMemory.create({
//       name: 'testee',
//       user_id: 'df478a83-2ae0-4117-97f1-cbf8eb27d8a8',
//       created_at: new Date(),
//       updated_at: new Date()
//     });
//     const tasks = await listTasksUseCase.execute({name:'teste'});
//     //eu espero que o que retorne seja um array com esse user que foi criado
//     expect(tasks).toEqual([task]);
//   })
});