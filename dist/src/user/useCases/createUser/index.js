"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepository_1 = require("../../repositories/usersRepository");
const createUserController_1 = require("./createUserController");
const createUserUseCase_ts_1 = require("./createUserUseCase.ts");
exports.default = () => {
    const usersRepository = new usersRepository_1.UsersRepository();
    const createUserUseCase = new createUserUseCase_ts_1.CreateUserUseCase(usersRepository);
    const createUserController = new createUserController_1.CreateUserController(createUserUseCase);
    return createUserController;
};
