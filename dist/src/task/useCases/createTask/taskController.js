"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskController = void 0;
const validationTasks_1 = require("../../../../src/plugin/validationTasks");
class CreateTaskController {
    createTaskUseCase;
    constructor(createTaskUseCase) {
        this.createTaskUseCase = createTaskUseCase;
    }
    async handle(request, reply) {
        try {
            const { name, user_id, description, total } = validationTasks_1.addTask.parse(request.body);
            const task = await this.createTaskUseCase.execute({ name, user_id, description, total });
            return reply.code(201).send("task created with success!");
        }
        catch (error) {
            return reply.code(400);
        }
    }
}
exports.CreateTaskController = CreateTaskController;
