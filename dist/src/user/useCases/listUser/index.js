"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepository_1 = require("../../repositories/usersRepository");
const listUserController_1 = require("./listUserController");
const listUsersUseCase_1 = require("./listUsersUseCase");
exports.default = () => {
    const usersRepository = new usersRepository_1.UsersRepository();
    const listUsersUseCase = new listUsersUseCase_1.ListUsersUseCase(usersRepository);
    const listUserController = new listUserController_1.ListUserController(listUsersUseCase);
    return listUserController;
};
