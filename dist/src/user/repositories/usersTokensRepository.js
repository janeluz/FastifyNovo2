"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTokensRepository = void 0;
const app_1 = require("app");
const uuid_1 = require("uuid");
class UsersTokensRepository {
    constructor() { }
    async create({ expires_date, refresh_token, user_id }) {
        const client = await app_1.app.pg.connect();
        const id = (0, uuid_1.v4)();
        const created_at = new Date();
        const query = (`INSERT INTO usersTokens(id,user_id,expires_date,refresh_token,created_at)
            VALUES($1,$2,$3,$4,$5)`);
        const values = [id, user_id, expires_date, refresh_token, created_at];
        const userToken = await client.query(query, values);
        return userToken;
    }
}
exports.UsersTokensRepository = UsersTokensRepository;
