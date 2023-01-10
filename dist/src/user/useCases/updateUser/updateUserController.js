"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
class UpdateUserController {
    updateUserUseCase;
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    async handle(request, reply) {
        const { id } = request.params;
        const { name, email, password } = request.body;
        try {
            await this.updateUserUseCase.execute(id, { name, email, password });
            return reply.code(200).send();
        }
        catch (error) {
            return reply.code(400).send();
        }
    }
}
exports.UpdateUserController = UpdateUserController;
