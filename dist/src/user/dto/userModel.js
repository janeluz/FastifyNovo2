"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    id;
    name;
    email;
    password;
    isAdmin;
    departament;
    avatar;
    created_at;
    update_at;
    constructor(name, email, password, isAdmin, departament, avatar) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.departament = departament;
        this.avatar = avatar;
        this.created_at = new Date();
        this.update_at = new Date();
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
}
exports.User = User;
