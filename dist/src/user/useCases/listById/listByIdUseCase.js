"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserByIdUseCase = void 0;
class ListUserByIdUseCase {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(id) {
        const user = this.usersRepository.findById(id);
        return user;
    }
}
exports.ListUserByIdUseCase = ListUserByIdUseCase;
