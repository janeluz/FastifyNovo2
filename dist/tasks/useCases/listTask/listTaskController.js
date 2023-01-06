"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksController = void 0;
class ListTasksController {
    listTasksUseCase;
    constructor(listTasksUseCase) {
        this.listTasksUseCase = listTasksUseCase;
    }
    async handle(request, reply) {
        const tasks = await this.listTasksUseCase.execute();
        reply.send(tasks);
    }
}
exports.ListTasksController = ListTasksController;
