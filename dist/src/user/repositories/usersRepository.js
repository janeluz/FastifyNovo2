"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const app_1 = require("../../../app");
const uuid_1 = require("uuid");
class UsersRepository {
    constructor() { }
    // async  createTable () {
    //   const client = await app.pg.connect();
    //   const query = `CREATE TABLE IF NOT EXISTS users (
    //     id uuid PRIMARY KEY,
    //     name varchar(255) NOT NULL,
    //     email varchar(255) NOT NULL,
    //     password varchar(255) NOT NULL,
    //     avatar varchar(255) NOT NULL,
    //     isAdmin boolean NOT NULL,
    //     departament varchar(255) NOT NULL
    //     created_at timestamp NOT NULL,
    //     updated_at timestamp NOT NULL);`
    //     return app.pg.transact(async(client) => {
    //       const result = await client.query(query)
    //       return result
    //     })
    //   }
    async findById(id) {
        const client = await app_1.app.pg.connect();
        const { rows } = await client.query('SELECT * FROM users where id = $1', [id]);
        return rows;
    }
    async create({ name, email, password, isAdmin, departament }) {
        const client = await app_1.app.pg.connect();
        const id = (0, uuid_1.v4)();
        const avatar = null;
        const created_at = new Date();
        const updated_at = new Date();
        const query = (`INSERT INTO users(id,name,email,password,avatar,isAdmin,departament,created_at,updated_at)
            VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`);
        const values = [id, name, email, password, avatar, isAdmin, departament, created_at, updated_at];
        const user = await client.query(query, values);
        return user;
    }
    async findByEmail(email) {
        const client = await app_1.app.pg.connect();
        const { rows } = await client.query(`SELECT * FROM users where email = $1`, [email]);
        return rows[0];
    }
    async listAllUser() {
        const client = app_1.app.pg.connect();
        const { rows } = await (await client).query('SELECT * FROM users');
        return rows;
    }
    async update(id, body) {
        const client = await app_1.app.pg.connect();
        const updated_at = new Date();
        const query = (`UPDATE users SET name = $1, email = $2, password = $3, updated_at = $4
            WHERE id = $5`);
        const values = [body.name, body.email, body.password, updated_at, id];
        const user = await client.query(query, values);
        return user;
    }
}
exports.UsersRepository = UsersRepository;
