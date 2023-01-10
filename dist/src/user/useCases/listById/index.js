"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepository_1 = require("../../repositories/usersRepository");
const listByIdController_1 = require("./listByIdController");
const listByIdUseCase_1 = require("./listByIdUseCase");
exports.default = () => {
    const usersRepository = new usersRepository_1.UsersRepository();
    const listUserByIdUseCase = new listByIdUseCase_1.ListUserByIdUseCase(usersRepository);
    const listUserByIdController = new listByIdController_1.ListUserByIdController(listUserByIdUseCase);
    return listUserByIdController;
};
