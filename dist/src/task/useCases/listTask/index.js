"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksRepository_1 = require("../../repositories/tasksRepository");
const listTasksController_1 = require("./listTasksController");
const listTasksUseCase_1 = require("./listTasksUseCase");
exports.default = () => {
    const tasksRepository = new tasksRepository_1.TasksRepository();
    const listTasksUseCase = new listTasksUseCase_1.ListTasksUseCase(tasksRepository);
    const listTasksController = new listTasksController_1.ListTasksController(listTasksUseCase);
    return listTasksController;
};
