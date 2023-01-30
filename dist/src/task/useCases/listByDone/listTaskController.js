"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksByDoneController = void 0;
class ListTasksByDoneController {
    listTasksByDoneUseCase;
    constructor(listTasksByDoneUseCase) {
        this.listTasksByDoneUseCase = listTasksByDoneUseCase;
    }
    async handle(request, reply) {
        const created_at = request.body;
        const task = await this.listTasksByDoneUseCase.execute(created_at);
        return reply.send(task);
    }
}
exports.ListTasksByDoneController = ListTasksByDoneController;
