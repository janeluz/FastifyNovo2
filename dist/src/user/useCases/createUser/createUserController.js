"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const validationUser_1 = require("../../../../src/plugin/validationUser");
class CreateUserController {
    createUserUseCase;
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, reply) {
        const { name, email, password, confirmPassword, isAdmin, departament } = validationUser_1.addUser.parse(request.body);
        try {
            const newUser = await this.createUserUseCase.execute({ name, email, password, confirmPassword, isAdmin, departament });
            return reply.code(201).send(newUser);
        }
        catch (error) {
            reply.code(400).send(error.message);
        }
    }
}
exports.CreateUserController = CreateUserController;
