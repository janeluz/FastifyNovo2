"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksRepository_1 = require("../../repositories/tasksRepository");
const listTaskController_1 = require("./listTaskController");
const listTaskUseCase_1 = require("./listTaskUseCase");
exports.default = () => {
    const tasksRepository = new tasksRepository_1.TasksRepository();
    const listTasksByDoneUseCase = new listTaskUseCase_1.ListTasksByDoneUseCase(tasksRepository);
    const listTasksByDoneController = new listTaskController_1.ListTasksByDoneController(listTasksByDoneUseCase);
    return listTasksByDoneController;
};
