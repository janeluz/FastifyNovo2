"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepository_1 = require("../user/repositories/usersRepository");
const createSessionController_1 = require("./createSessionController");
const createSessionUseCase_1 = require("./createSessionUseCase");
exports.default = () => {
    const usersRepository = new usersRepository_1.UsersRepository();
    const createSessionUseCase = new createSessionUseCase_1.CreateSessionUseCase(usersRepository);
    const createSessionController = new createSessionController_1.SessionController(createSessionUseCase);
    return createSessionController;
};
