"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepositories_1 = require("src/repositories/usersRepositories");
describe('List User By Id', () => {
    beforeEach(() => {
        it('should be able to list a user by id', async () => {
            const usersRepository = new usersRepositories_1.UsersRepository();
            const user = await usersRepository.findById('1');
            console.log(user);
            expect(user).toHaveProperty('id');
        });
    });
});
