"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksByDoneController = void 0;
class ListTasksByDoneController {
    listTasksByDoneUseCase;
    constructor(listTasksByDoneUseCase) {
        this.listTasksByDoneUseCase = listTasksByDoneUseCase;
    }
    async handle(request, reply) {
        const done = request.params;
        const task = await this.listTasksByDoneUseCase.execute(done);
        reply.send(task);
    }
}
exports.ListTasksByDoneController = ListTasksByDoneController;
