"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskController = void 0;
class DeleteTaskController {
    deleteTaskUseCase;
    async handler(request, reply) {
        try {
            const { id } = request.body;
            const deleteUser = await this.deleteTaskUseCase.execute({ id });
            return reply.code(201).send(deleteUser);
        }
        catch (error) {
            return reply.send(400);
        }
    }
}
exports.DeleteTaskController = DeleteTaskController;
