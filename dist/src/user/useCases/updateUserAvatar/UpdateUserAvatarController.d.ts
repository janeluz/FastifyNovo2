import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase";
declare class UpdateUserAvatarController {
    private updateUserAvatarUseCase;
    constructor(updateUserAvatarUseCase: UpdateUserAvatarUseCase);
    handle(request: any, reply: any): Promise<Response>;
}
export { UpdateUserAvatarController };
