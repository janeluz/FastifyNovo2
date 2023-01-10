import { UsersRepository } from "../../repositories/usersRepository";
import { UpdateUserAvatarController } from "./UpdateUserAvatarController";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

export default () => {
    const usersRepository = new UsersRepository();
    const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(usersRepository);
    const updateUserAvatarController = new UpdateUserAvatarController(updateUserAvatarUseCase);

    return updateUserAvatarController;
};

