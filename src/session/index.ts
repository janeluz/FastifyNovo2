import { UsersRepository } from "../repositories/usersRepositories";
import { SessionController } from "./createSessionController";
import { CreateSessionUseCase } from "./createSessionUseCase";

export default () => {
    const usersRepository = new UsersRepository();
    const createSessionUseCase = new CreateSessionUseCase(usersRepository);
    const createSessionController = new SessionController(createSessionUseCase);

    return createSessionController;
};
