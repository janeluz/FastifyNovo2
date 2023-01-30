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
        console.log("avatarUsecase", avatar);
        console.log("avatarUsecase", avatar.filename);
        const user = await this.usersRepository.findById(id);
        console.log("testeUseCase222", id);
        if (user.avatar) {
            console.log("testeeeUseCae11", user.avatar);
            await (0, file_1.deleteFile)(`./temp/avatar/${user.avatar}`);
        }
        user.avatar = avatar;
        console.log("testeeeUseCae2", avatar);
        await this.usersRepository.updateAvatar(id, avatar);
    }
}
exports.UpdateUserAvatarUseCase = UpdateUserAvatarUseCase;
