"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepositories_1 = require("../../../../src/repositories/usersRepositories");
const UpdateUserAvatarController_1 = require("./UpdateUserAvatarController");
const UpdateUserAvatarUseCase_1 = require("./UpdateUserAvatarUseCase");
exports.default = () => {
    const usersRepository = new usersRepositories_1.UsersRepository();
    const updateUserAvatarUseCase = new UpdateUserAvatarUseCase_1.UpdateUserAvatarUseCase(usersRepository);
    const updateUserAvatarController = new UpdateUserAvatarController_1.UpdateUserAvatarController(updateUserAvatarUseCase);
    return updateUserAvatarController;
};
