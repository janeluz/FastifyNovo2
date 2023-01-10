import { UpdateUserUseCase } from "./updateUserUseCase";
declare class UpdateUserController {
    private updateUserUseCase;
    constructor(updateUserUseCase: UpdateUserUseCase);
    handle(request: any, reply: any): Promise<Response>;
}
export { UpdateUserController };
