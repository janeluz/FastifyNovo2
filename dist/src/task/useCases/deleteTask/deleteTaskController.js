"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskController = void 0;
class DeleteTaskController {
    deleteTaskUseCase;
    constructor(deleteTaskUseCase) {
        this.deleteTaskUseCase = deleteTaskUseCase;
    }
    async handle(request, reply) {
        try {
            const { id } = request.params;
            await this.deleteTaskUseCase.execute(id);
            return reply.code(201).send();
        }
        catch (error) {
            return reply.send(400);
        }
    }
}
exports.DeleteTaskController = DeleteTaskController;
