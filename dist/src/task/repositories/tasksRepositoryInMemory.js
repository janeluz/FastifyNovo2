"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRepositoryInMemory = void 0;
const task_1 = require("../entities/task");
class TasksRepositoryInMemory {
    update(id, body) {
        throw new Error("Method not implemented.");
    }
    tasks = [];
    async create({ name, user_id, description, done: boolean, total }) {
        const task = new task_1.Task(name, user_id, description, false, total);
        Object.assign(task, {
            name,
            user_id,
            description,
            done: false,
            start_task: new Date(),
            end_task: new Date(),
            total,
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
    findByDone(created_at) {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        const task = this.tasks.find((task) => task.id === id);
        return task;
    }
    async deleteById(id) {
        await this.deleteById(id);
    }
}
exports.TasksRepositoryInMemory = TasksRepositoryInMemory;
