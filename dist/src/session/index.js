"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepositories_1 = require("../repositories/usersRepositories");
const createSessionController_1 = require("./createSessionController");
const createSessionUseCase_1 = require("./createSessionUseCase");
exports.default = () => {
    const usersRepository = new usersRepositories_1.UsersRepository();
    const createSessionUseCase = new createSessionUseCase_1.CreateSessionUseCase(usersRepository);
    const createSessionController = new createSessionController_1.SessionController(createSessionUseCase);
    return createSessionController;
};
