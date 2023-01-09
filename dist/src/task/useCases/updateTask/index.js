"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksRepository_1 = require("../../../../src/task/repositories/tasksRepository");
const updateTaskController_1 = require("./updateTaskController");
const updateTaskUseCase_1 = require("./updateTaskUseCase");
exports.default = () => {
    const tasksRepository = new tasksRepository_1.TasksRepository();
    const updateTaskUseCase = new updateTaskUseCase_1.UpdateTaskUseCase(tasksRepository);
    const updateTaskController = new updateTaskController_1.UpdateTaskController(updateTaskUseCase);
    return updateTaskController;
};
