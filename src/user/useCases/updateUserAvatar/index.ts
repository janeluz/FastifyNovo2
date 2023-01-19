import { UsersRepository } from "../../repositories/usersRepository";
import { UpdateUserAvatarController } from "../updateUserAvatar/UpdateUserAvatarController";
import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase";

export default () => {
    const usersRepository = new UsersRepository();
    const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(usersRepository);
    const updateUserAvatarController = new UpdateUserAvatarController(updateUserAvatarUseCase);

    return updateUserAvatarController;
};

