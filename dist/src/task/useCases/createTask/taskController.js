"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskController = void 0;
class CreateTaskController {
    createTaskUseCase;
    constructor(createTaskUseCase) {
        this.createTaskUseCase = createTaskUseCase;
    }
    async handle(request, reply) {
        try {
            const { name, user_id, description, done } = request.body;
            const task = await this.createTaskUseCase.execute({ name, user_id, description, done });
            return reply.code(201).send("task created with success!");
        }
        catch (error) {
            return reply.send(400);
        }
    }
}
exports.CreateTaskController = CreateTaskController;
