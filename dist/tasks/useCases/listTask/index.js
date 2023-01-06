"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksRepository_1 = require("../../repositories/tasksRepository");
const listTaskController_1 = require("./listTaskController");
const listTaskUseCase_1 = require("./listTaskUseCase");
exports.default = () => {
    const tasksRepository = new tasksRepository_1.TasksRepository();
    const listTasksUseCase = new listTaskUseCase_1.ListTasksUseCase(tasksRepository);
    const listTasksController = new listTaskController_1.ListTasksController(listTasksUseCase);
    return listTasksController;
};
