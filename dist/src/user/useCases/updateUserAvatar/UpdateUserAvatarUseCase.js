"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAvatarUseCase = void 0;
const file_1 = require("../../../../helper/file");
class UpdateUserAvatarUseCase {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute({ id, avatar_file }) {
        console.log("testeUseCase", id, avatar_file);
        const user = await this.usersRepository.findById(id);
        console.log("testeUseCase222", id);
        if (user.avatar) {
            console.log("testeeeUseCae11", user.avatar);
            await (0, file_1.deleteFile)(`./temp/avatar/${user.avatar}`);
        }
        user.avatar = avatar_file;
        console.log("testeeeUseCae2", avatar_file);
        await this.usersRepository.create(user);
    }
}
exports.UpdateUserAvatarUseCase = UpdateUserAvatarUseCase;
