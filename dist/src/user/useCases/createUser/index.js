"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepositories_1 = require("../../../../src/repositories/usersRepositories");
const createUserController_1 = require("./createUserController");
const createUserUseCase_ts_1 = require("./createUserUseCase.ts");
exports.default = () => {
    const usersRepository = new usersRepositories_1.UsersRepository();
    const createUserUseCase = new createUserUseCase_ts_1.CreateUserUseCase(usersRepository);
    const createUserController = new createUserController_1.CreateUserController(createUserUseCase);
    return createUserController;
};
