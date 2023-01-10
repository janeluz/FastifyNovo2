import { CreateSessionUseCase } from "./createSessionUseCase";
declare class SessionController {
    private createSessionUseCase;
    constructor(createSessionUseCase: CreateSessionUseCase);
    handle(request: any, reply: any): Promise<Response>;
}
export { SessionController };
