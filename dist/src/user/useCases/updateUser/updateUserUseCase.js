"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(id, body) {
        await this.usersRepository.findById(id);
        const updateUser = await this.usersRepository.update(id, body);
        return updateUser;
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
