"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAdmin = void 0;
const usersRepository_1 = require("../user/repositories/usersRepository");
async function ensureAdmin(request, reply, done) {
    const { id } = request.user;
    const usersRepository = new usersRepository_1.UsersRepository();
    const user = await usersRepository.findById(id);
    if (!user.isAdmin) {
        throw new Error("User isn't admin!");
    }
    return done();
}
exports.ensureAdmin = ensureAdmin;
