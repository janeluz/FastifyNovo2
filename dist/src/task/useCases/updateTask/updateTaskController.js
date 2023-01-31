"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskController = void 0;
class UpdateTaskController {
    updateTaskUseCase;
    constructor(updateTaskUseCase) {
        this.updateTaskUseCase = updateTaskUseCase;
    }
    async handle(request, reply) {
        const { id } = request.params;
        const { name, description, done, total } = request.body;
        try {
            await this.updateTaskUseCase.execute(id, { name, description, done, total });
            return reply.code(200).send();
        }
        catch (error) {
            return reply.code(400).send();
        }
    }
}
exports.UpdateTaskController = UpdateTaskController;
