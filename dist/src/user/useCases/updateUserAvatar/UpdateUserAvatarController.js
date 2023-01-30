"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAvatarController = void 0;
class UpdateUserAvatarController {
    updateUserAvatarUseCase;
    constructor(updateUserAvatarUseCase) {
        this.updateUserAvatarUseCase = updateUserAvatarUseCase;
    }
    async handle(request, reply) {
        console.log("requestController", request);
        const { id } = request.user;
        console.log("testeId", id);
        const avatar = request.file;
        console.log("avatar_file/filename", request.file);
        const user = await this.updateUserAvatarUseCase.execute({
            id: id,
            avatar,
        });
        console.log('teste', user);
        return reply.code(204).send(user);
    }
}
exports.UpdateUserAvatarController = UpdateUserAvatarController;
