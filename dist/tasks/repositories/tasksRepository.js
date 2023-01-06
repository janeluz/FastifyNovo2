"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRepository = void 0;
const app_1 = require("../../app");
const uuid_1 = require("uuid");
class TasksRepository {
    constructor() { }
    async listAllTask() {
        const client = await app_1.app.pg.connect();
        try {
            const { rows } = await client.query('SELECT * FROM tasks');
            console.log(rows);
            return rows;
        }
        catch (err) {
            throw new Error('User not found!!');
        }
    }
    async create({ name, user_id, description, done }) {
        const client = await app_1.app.pg.connect();
        const id = (0, uuid_1.v4)();
        const query = {
            text: `INSERT INTO tasks(id,name, user_id,description,done)
          VALUES($1,$2,$3,$4,$5) RETURNING*`,
            values: [id, name, user_id, description, done]
        };
        try {
            const { rows } = await client.query(query);
            console.log(rows[0]);
        }
        catch (err) {
            throw new Error('Task not found!!');
        }
        return query;
    }
    async deleteById(id) {
        const client = await app_1.app.pg.connect();
        try {
            const { rows } = await client.query(`DELETE FROM tasks
    WHERE id = $1 RETURNING *`);
            console.log(rows[0]);
            return rows[0];
        }
        catch (err) {
            throw new Error();
        }
    }
    ;
    async findById(id) {
        const client = await app_1.app.pg.connect();
        const task = await client.query(`SELECT * FROM tasks WHERE id = $1 RETURNING *`);
        console.log(task.rows[0]);
        return task.rows[0];
    }
    findByName(name) {
        throw new Error("Method not implemented.");
    }
}
exports.TasksRepository = TasksRepository;
