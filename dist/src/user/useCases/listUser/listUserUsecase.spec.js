"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepository_1 = require("../../../../src/user/repositories/usersRepository");
describe('List Users ', () => {
    beforeEach(() => {
        it('should be able to list a users', async () => {
            const usersRepository = new usersRepository_1.UsersRepository();
            const users = await usersRepository.listAllUser();
            console.log(users);
            expect(users);
        });
    });
});
