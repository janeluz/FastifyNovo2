"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAvatarUseCase = void 0;
const file_1 = require("../../../../helper/file");
class UpdateUserAvatarUseCase {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute({ id, avatar }) {
        console.log("debug usecase avatar", avatar);
        console.log("debug usecase id", id);
        const user = await this.usersRepository.findById(id);
        if (user.avatar) {
            await (0, file_1.deleteFile)(`./temp/avatar/${user.avatar}`);
        }
        user.avatar = avatar;
        await this.usersRepository.updateAvatar(id, avatar);
    }
}
exports.UpdateUserAvatarUseCase = UpdateUserAvatarUseCase;
