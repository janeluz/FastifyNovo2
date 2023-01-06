
import { UsersRepository } from "../../../../src/repositories/usersRepositories";
import { ListUserByIdController } from "./listByIdController";
import { ListUserByIdUseCase } from "./listByIdUseCase";

export default () => {
    const usersRepository = new UsersRepository();
    const listUserByIdUseCase = new ListUserByIdUseCase(usersRepository);
    const listUserByIdController = new ListUserByIdController(listUserByIdUseCase);

    return listUserByIdController;
};
