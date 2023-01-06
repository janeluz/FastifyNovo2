"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserController = void 0;
class ListUserController {
    listUsersUseCase;
    constructor(listUsersUseCase) {
        this.listUsersUseCase = listUsersUseCase;
    }
    async handle(request, reply) {
        const user = await this.listUsersUseCase.execute();
        return reply.code(200).send(user);
    }
}
exports.ListUserController = ListUserController;
