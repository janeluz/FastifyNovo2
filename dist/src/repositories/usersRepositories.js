"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const app_1 = require("../../app");
const uuid_1 = require("uuid");
class UsersRepository {
    constructor() { }
    async createTable() {
        const client = await app_1.app.pg.connect();
        const query = `CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    avatar varchar(255) NOT NULL,
    isAdmin boolean NOT NULL,
    departament varchar(255) NOT NULL
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL);`;
        return app_1.app.pg.transact(async (client) => {
            const result = await client.query(query);
            return result;
        });
    }
    async findById(id) {
        const client = await app_1.app.pg.connect();
        const { rows } = await client.query('select * from users where id = $1', [id]);
        console.log(rows[0]);
        return rows[0];
    }
    async create({ name, email, password, avatar, isAdmin, departament }) {
        const client = await app_1.app.pg.connect();
        const id = (0, uuid_1.v4)();
        const created_at = new Date();
        const updated_at = new Date();
        const query = {
            text: `INSERT INTO users(id,name,email,password,avatar,isAdmin,departament,created_at,updated_at)
            VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
            values: [id, name, email, password, avatar, isAdmin, departament, created_at, updated_at]
        };
        try {
            const { rows } = await client.query(query);
            console.log(rows[0]);
        }
        catch (err) {
            throw new Error();
        }
        return query;
    }
    async findByEmail(email) {
        const client = await app_1.app.pg.connect();
        const { rows } = await client.query('select * from users where email = $1', [email]);
        console.log(rows[0]);
        return rows[0];
    }
    async listAllUser() {
        const client = app_1.app.pg.connect();
        try {
            const { rows } = await (await client).query('SELECT * FROM users');
            console.log(rows);
            return rows;
        }
        catch (err) {
            throw new Error('User not found!!');
        }
    }
}
exports.UsersRepository = UsersRepository;
