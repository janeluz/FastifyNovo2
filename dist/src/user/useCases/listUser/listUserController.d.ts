import { User } from "src/user/dto/userModel";
import { ListUsersUseCase } from "./listUsersUseCase";
declare class ListUserController {
    private listUsersUseCase;
    constructor(listUsersUseCase: ListUsersUseCase);
    handle(request: any, reply: any): Promise<User[]>;
}
export { ListUserController };
