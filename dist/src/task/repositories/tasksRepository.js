"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRepository = void 0;
const app_1 = require("../../../app");
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
        const created_at = new Date();
        const updated_at = new Date();
        const query = (`INSERT INTO tasks(id,name, user_id,description,done,created_at,updated_at)
          VALUES($1,$2,$3,$4,$5,$6,$7)`);
        const values = [id, name, user_id, description, done, created_at, updated_at];
        const task = await client.query(query, values);
        return task;
    }
    async deleteById(id) {
        const client = await app_1.app.pg.connect();
        const user = await client.query(`DELETE FROM tasks
      WHERE id = $1`, [id]);
        console.log(user);
        return user;
    }
    ;
    async findById(id) {
        const client = await app_1.app.pg.connect();
        const task = await client.query(`SELECT * FROM tasks WHERE id = $1`, [id]);
        return task;
    }
    async findByName(name) {
        const client = app_1.app.pg.connect();
        const task = await (await client).query('SELECT * FROM users WHERE name = $1', [name]);
        return task;
    }
    async findByDone(done) {
        const client = app_1.app.pg.connect();
        const task = await (await client).query(`SELECT * FROM tasks WHERE done = $1`, [done]);
        return task;
    }
    async update(id, body) {
        const client = await app_1.app.pg.connect();
        const updated_at = new Date();
        const query = (`UPDATE tasks SET name = $1, description = $2, done = $3, updated_at = $4
          WHERE id = $5`);
        const values = [body.name, body.description, body.done, updated_at, id];
        const task = await client.query(query, values);
        return task;
    }
}
exports.TasksRepository = TasksRepository;
