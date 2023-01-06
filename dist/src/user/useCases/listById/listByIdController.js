"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserByIdController = void 0;
class ListUserByIdController {
    listUserByIdUseCase;
    constructor(listUserByIdUseCase) {
        this.listUserByIdUseCase = listUserByIdUseCase;
    }
    async handle(request, reply) {
        const id = request.params.id;
        const user = await this.listUserByIdUseCase.execute(id);
        return reply.code(200).send(user);
    }
}
exports.ListUserByIdController = ListUserByIdController;
