"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
class CreateUserUseCase {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute({ name, email, password, confirmPassword, isAdmin, departament }) {
        const usersAlreadyExists = await this.usersRepository.findByEmail(email);
        if (usersAlreadyExists) {
            throw new Error(" user Already exists!");
        }
        if (password != confirmPassword) {
            throw new Error("Password does not match!");
        }
        const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
        const user = this.usersRepository.create({ name, email, password: passwordHash, isAdmin, departament });
        return user;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
