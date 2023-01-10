"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(id, body) {
        const user = await this.usersRepository.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        const updateUser = await this.usersRepository.update(id, body);
        console.log('testeeeeeeeeeee', updateUser);
        return updateUser;
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
