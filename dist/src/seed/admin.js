"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("app");
const uuid_1 = require("uuid");
const bcryptjs_1 = require("bcryptjs");
async function create() {
    const client = app_1.app.pg.connect();
    const id = (0, uuid_1.v4)();
    const password = await (0, bcryptjs_1.hash)("admin", 8);
    await (await client).query(`INSERT INTO users(id, name, email, password,avatar,isAdmin,departament,created_at,updated_at)
    values('${id}', 'Jane', 'admin@gmail.com', '${password}', 'avatar', true, 'development', '${new Date()})', '${new Date()})'`);
    (await client).release;
}
create();
