"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersUseCase = void 0;
class ListUsersUseCase {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute() {
        const user = this.usersRepository.listAllUser();
        return user;
    }
}
exports.ListUsersUseCase = ListUsersUseCase;
