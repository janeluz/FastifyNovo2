import { UsersRepository } from "../../repositories/usersRepository";
import { UpdateUserAvatarController } from "./updateUserAvatarController";
import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase";

export default () => {
    const usersRepository = new UsersRepository();
    const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(usersRepository);
    const updateUserAvatarController = new UpdateUserAvatarController(updateUserAvatarUseCase);

    return updateUserAvatarController;
};

