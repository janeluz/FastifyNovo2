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
        const avatar_file = request.file.filename;
        const user = await this.updateUserAvatarUseCase.execute({
            user_id: id,
            avatar_file,
        });
        return reply.status(204).send(user);
    }
}
exports.UpdateUserAvatarController = UpdateUserAvatarController;
