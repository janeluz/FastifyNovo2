"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepository_1 = require("../../repositories/usersRepository");
const updateUserController_1 = require("./updateUserController");
const updateUserUseCase_1 = require("./updateUserUseCase");
exports.default = () => {
    const usersRepository = new usersRepository_1.UsersRepository();
    const updateUserUseCase = new updateUserUseCase_1.UpdateUserUseCase(usersRepository);
    const updateUserController = new updateUserController_1.UpdateUserController(updateUserUseCase);
    return updateUserController;
};
