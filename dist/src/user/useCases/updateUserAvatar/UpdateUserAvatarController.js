"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAvatarController = void 0;
class UpdateUserAvatarController {
    updateUserAvatarUseCase;
    constructor(updateUserAvatarUseCase) {
        this.updateUserAvatarUseCase = updateUserAvatarUseCase;
    }
    async handle(request, reply) {
        const { id } = request.user;
        console.log("testeId", id);
        const avatar_file = request.file.filename;
        console.log("avatar_file", request.file);
        const user = await this.updateUserAvatarUseCase.execute({
            id: id,
            avatar_file,
        });
        console.log('teste', user);
        return reply.status(204).send(user);
    }
}
exports.UpdateUserAvatarController = UpdateUserAvatarController;
