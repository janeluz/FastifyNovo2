"use strict";
// import { TasksRepositoryInMemory } from "../../repositories/tasksRepositoryInMemory";
// import { ListTasksByDoneUseCase } from "./listTaskUseCase";
// let listTasksByDoneUseCase:ListTasksByDoneUseCase;
// let tasksRepositoryInMemory:TasksRepositoryInMemory;
// describe("List tasks", () => {
//     beforeEach(()=> {
//        tasksRepositoryInMemory = new TasksRepositoryInMemory();
//        listTasksByDoneUseCase = new ListTasksByDoneUseCase(tasksRepositoryInMemory);
//     });
//     it("should be able list task", async () => {
//       const task = await tasksRepositoryInMemory.create({
//         name: 'testee',
//         user_id:'df478a83-2ae0-4117-97f1-cbf8eb27d8a8',
//         description: 'Criar testes',
//         done: false,
//         start_task:new Date(),
//         end_task:new Date(),
//         total: 4,
//         created_at: new Date(),
//         updated_at: new Date()
//       });
//       const tasks = await listTasksByDoneUseCase.execute();
//       //eu espero que retorne a task
//       expect(tasks).toEqual([task]);
//   });
//   it("should be able to list all available tasks by name", async() => {
//     const task = await tasksRepositoryInMemory.create({
//       name: 'testee',
//       user_id: 'df478a83-2ae0-4117-97f1-cbf8eb27d8a8',
//       description:'task de test',
//       start_task: new Date(),
//       end_task: new Date(),
//       total: 2,
//       created_at: new Date(),
//       updated_at: new Date()
//     });
//     const tasks = await listTasksByDoneUseCase.execute({name:'testee'});
//     //eu espero que o que retorne seja um array com essa task que foi criada
//     expect(tasks).toEqual([task]);
//   });
