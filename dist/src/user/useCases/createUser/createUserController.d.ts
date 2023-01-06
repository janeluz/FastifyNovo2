import { CreateUserUseCase } from './createUserUseCase.ts';
declare class CreateUserController {
    private createuserUseCase;
    constructor(createuserUseCase: CreateUserUseCase);
    handle(request: any, reply: any): Promise<void>;
}
export { CreateUserController };
