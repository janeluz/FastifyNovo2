"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepositories_1 = require("../../../../src/repositories/usersRepositories");
const listByIdController_1 = require("./listByIdController");
const listByIdUseCase_1 = require("./listByIdUseCase");
exports.default = () => {
    const usersRepository = new usersRepositories_1.UsersRepository();
    const listUserByIdUseCase = new listByIdUseCase_1.ListUserByIdUseCase(usersRepository);
    const listUserByIdController = new listByIdController_1.ListUserByIdController(listUserByIdUseCase);
    return listUserByIdController;
};
