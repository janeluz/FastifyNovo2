"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRepositoryInMemory = void 0;
const task_1 = require("../entities/task");
class TasksRepositoryInMemory {
    update(id, body) {
        throw new Error("Method not implemented.");
    }
    tasks = [];
    async create({ name, user_id, description, done }) {
        const task = new task_1.Task(name, user_id, description, done);
        Object.assign(task, {
            name,
            user_id,
            done: false,
            created_at: new Date(),
            updated_at: new Date(),
        });
        this.tasks.push(task);
        return task;
    }
    async findByName(name) {
        const task = this.tasks.find((task) => task.name === name);
        return task;
    }
    async listAllTask() {
        return this.tasks;
    }
    findByDone() {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        const task = this.tasks.find((task) => task.id === id);
        return task;
    }
    deleteById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.TasksRepositoryInMemory = TasksRepositoryInMemory;
