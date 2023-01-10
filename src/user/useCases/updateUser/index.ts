
import { UsersRepository } from "../../repositories/usersRepository";
import { UpdateUserController } from "./updateUserController";
import { UpdateUserUseCase } from "./updateUserUseCase";



export default () => {
    const usersRepository = new UsersRepository();
    const updateUserUseCase = new UpdateUserUseCase(usersRepository);
    const updateUserController = new UpdateUserController(updateUserUseCase);

    return updateUserController;
};
