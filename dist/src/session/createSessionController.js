"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
class SessionController {
    createSessionUseCase;
    constructor(createSessionUseCase) {
        this.createSessionUseCase = createSessionUseCase;
    }
    async handle(request, reply) {
        const { email, password } = request.body;
        try {
            const session = await this.createSessionUseCase.execute(email, password);
            console.log("testeeeee4", session);
            return reply.code(200).send(session);
        }
        catch (error) {
            return reply.code(400).send(error.message);
        }
    }
}
exports.SessionController = SessionController;
