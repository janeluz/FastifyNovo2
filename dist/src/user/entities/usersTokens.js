"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class UserTokens {
    id;
    user_id;
    refresh_token;
    created_at;
    constructor(user_id, refresh_token, created_at) {
        this.user_id = user_id;
        this.refresh_token = refresh_token;
        this.created_at = created_at;
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
}
exports.default = UserTokens;
