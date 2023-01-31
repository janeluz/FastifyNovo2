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
        const avatar = request.file;
        console.log('debug avatar', avatar);
        console.log("debug controller request.file", request.file);
        const user = await this.updateUserAvatarUseCase.execute({
            id: id,
            avatar,
        });
        return reply.code(204).send(user);
    }
}
exports.UpdateUserAvatarController = UpdateUserAvatarController;
