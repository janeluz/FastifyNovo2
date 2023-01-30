"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = require("uuid");
class Task {
    id;
    name;
    user_id;
    description;
    done;
    start_task;
    end_task;
    total;
    created_at;
    update_at;
    constructor(name, user_id, description, done, total) {
        this.name = name;
        this.user_id = user_id;
        this.description = description;
        this.created_at = new Date();
        this.update_at = new Date();
        this.done = done;
        this.total = total;
        this.start_task = new Date();
        this.end_task = new Date();
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
}
exports.Task = Task;
