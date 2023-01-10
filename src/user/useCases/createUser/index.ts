
import { UsersRepository } from "../../repositories/usersRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase.ts";

export default () => {
    const usersRepository = new UsersRepository();
    const createUserUseCase = new CreateUserUseCase(usersRepository);
    const createUserController = new CreateUserController(createUserUseCase);

    return createUserController
};
