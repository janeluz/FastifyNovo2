import { User } from "src/user/dto/userModel";
import { ListUserByIdUseCase } from "./listByIdUseCase";
declare class ListUserByIdController {
    private listUserByIdUseCase;
    constructor(listUserByIdUseCase: ListUserByIdUseCase);
    handle(request: any, reply: any): Promise<User>;
}
export { ListUserByIdController };
