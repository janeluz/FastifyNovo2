"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepositoryInMemory = void 0;
const userModel_1 = require("../entities/userModel");
class UsersRepositoryInMemory {
    updateAvatar(id, body) {
        throw new Error("Method not implemented.");
    }
    users = [];
    async create({ name, email, password, avatar, isAdmin, departament, }) {
        const user = new userModel_1.User(name, email, password, avatar, isAdmin, departament);
        Object.assign(user, {
            name,
            email,
            password,
            avatar,
            isAdmin,
            departament,
        });
        this.users.push(user);
        return user;
    }
    async findByEmail(email) {
        const user = this.users.find((user) => user.email === email);
        return user;
    }
    async findById(id) {
        const user = this.users.find((user) => user.id === id);
        return user;
    }
    async listAllUser() {
        return this.users;
    }
    update(id, body) {
        throw new Error("Method not implemented.");
    }
}
exports.UsersRepositoryInMemory = UsersRepositoryInMemory;
