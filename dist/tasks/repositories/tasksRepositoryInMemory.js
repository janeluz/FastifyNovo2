"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRepositoryInMemory = void 0;
const task_1 = require("../entities/task");
class TasksRepositoryInMemory {
    findById(id) {
        throw new Error("Method not implemented.");
    }
    deleteById(id) {
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
    async findByDone(done) {
        const task = this.tasks.find((task) => task.done === done);
        if (done == true) {
            return task;
        }
        return task;
    }
    async listAllTask() {
        return this.tasks;
    }
}
exports.TasksRepositoryInMemory = TasksRepositoryInMemory;
