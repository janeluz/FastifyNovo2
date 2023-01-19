"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepository_1 = require("../../repositories/usersRepository");
const UpdateUserAvatarController_1 = require("../updateUserAvatar/UpdateUserAvatarController");
const updateUserAvatarUseCase_1 = require("./updateUserAvatarUseCase");
exports.default = () => {
    const usersRepository = new usersRepository_1.UsersRepository();
    const updateUserAvatarUseCase = new updateUserAvatarUseCase_1.UpdateUserAvatarUseCase(usersRepository);
    const updateUserAvatarController = new UpdateUserAvatarController_1.UpdateUserAvatarController(updateUserAvatarUseCase);
    return updateUserAvatarController;
};
