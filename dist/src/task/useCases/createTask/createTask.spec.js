"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksRepositoryInMemory_1 = require("../../repositories/tasksRepositoryInMemory");
const taskUseCase_1 = require("./taskUseCase");
let createTaskUseCase;
let tasksRepositoryInMemory;
describe('Create Task', () => {
    beforeEach(() => {
        tasksRepositoryInMemory = new tasksRepositoryInMemory_1.TasksRepositoryInMemory();
        createTaskUseCase = new taskUseCase_1.CreateTaskUseCase(tasksRepositoryInMemory);
    });
    it('should be able to create a new task', async () => {
        const user = await createTaskUseCase.execute({
            name: 'testee',
            user_id: "teste@TESTE",
            description: "tarefa final curso",
            done: false,
            created_at: new Date(),
            updated_at: new Date()
        });
        console.log(user);
        expect(user).toHaveProperty('id');
    });
});
