"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAdmin = void 0;
const usersRepositories_1 = require("../repositories/usersRepositories");
async function ensureAdmin(request, reply, done) {
    const { id } = request.user;
    const usersRepository = new usersRepositories_1.UsersRepository();
    const user = await usersRepository.findById(id);
    if (!user.isAdmin) {
        throw new Error("User isn't admin!");
    }
    return done();
}
exports.ensureAdmin = ensureAdmin;
