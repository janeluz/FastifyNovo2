import { CreateUserUseCase } from './createUserUseCase.ts';
declare class CreateUserController {
    private createUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase);
    handle(request: any, reply: any): Promise<void>;
}
export { CreateUserController };
