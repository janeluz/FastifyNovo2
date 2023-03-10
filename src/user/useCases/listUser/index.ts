

import { UsersRepository } from "../../repositories/usersRepository";
import { ListUserController } from "./listUserController";
import { ListUsersUseCase } from "./listUsersUseCase";


export default () => {
    const usersRepository = new UsersRepository();
    const listUsersUseCase = new ListUsersUseCase(usersRepository);
    const listUserController = new ListUserController(listUsersUseCase);

    return listUserController;
};
