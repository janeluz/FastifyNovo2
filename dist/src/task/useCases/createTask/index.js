"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksRepository_1 = require("../../repositories/tasksRepository");
const taskController_1 = require("./taskController");
const taskUseCase_1 = require("./taskUseCase");
exports.default = () => {
    const tasksRepository = new tasksRepository_1.TasksRepository();
    const createTaskUseCase = new taskUseCase_1.CreateTaskUseCase(tasksRepository);
    const createTaskController = new taskController_1.CreateTaskController(createTaskUseCase);
    return createTaskController;
};
