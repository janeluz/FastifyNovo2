"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksRepository_1 = require("../../repositories/tasksRepository");
const deleteTaskController_1 = require("./deleteTaskController");
const deleteTaskUseCase_1 = require("./deleteTaskUseCase");
exports.default = () => {
    const tasksRepository = new tasksRepository_1.TasksRepository();
    const deleteTaskUseCase = new deleteTaskUseCase_1.DeleteTaskUseCase(tasksRepository);
    const deleteTaskController = new deleteTaskController_1.DeleteTaskController(deleteTaskUseCase);
    return deleteTaskController;
};
