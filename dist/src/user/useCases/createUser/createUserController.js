"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const zod_1 = require("zod");
class CreateUserController {
    createuserUseCase;
    constructor(createuserUseCase) {
        this.createuserUseCase = createuserUseCase;
    }
    async handle(request, reply) {
        const addUser = zod_1.z.object({
            name: zod_1.z.string().min(3),
            email: zod_1.z.string().email(),
            password: zod_1.z.string().min(6),
            confirmPassword: zod_1.z.string().min(6),
            avatar: zod_1.z.string(),
            isAdmin: zod_1.z.boolean(),
            departament: zod_1.z.enum(['development', 'IA', 'RPA'])
        });
        const { name, email, password, confirmPassword, avatar, isAdmin, departament } = addUser.parse(request.body);
        try {
            if (password !== confirmPassword) {
                throw new Error('Password and Confirm Password must be the same');
            }
            const newUser = await this.createuserUseCase.execute({ name, email, password, confirmPassword, avatar, isAdmin, departament });
            return reply.code(201).send(newUser);
        }
        catch (error) {
            reply.code(400).send(error.message);
        }
    }
}
exports.CreateUserController = CreateUserController;
