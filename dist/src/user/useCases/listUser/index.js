"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepositories_1 = require("../../../../src/repositories/usersRepositories");
const listUserController_1 = require("./listUserController");
const listUsersUseCase_1 = require("./listUsersUseCase");
exports.default = () => {
    const usersRepository = new usersRepositories_1.UsersRepository();
    const listUsersUseCase = new listUsersUseCase_1.ListUsersUseCase(usersRepository);
    const listUserController = new listUserController_1.ListUserController(listUsersUseCase);
    return listUserController;
};
