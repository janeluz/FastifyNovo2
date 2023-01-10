"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createUserUseCase_ts_1 = require("./createUserUseCase.ts");
const usersRepositoryInMemory_1 = require("../../repositories/usersRepositoryInMemory");
let createUserUseCase;
let usersRepositoryInMemory;
describe('Create User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new usersRepositoryInMemory_1.UsersRepositoryInMemory();
        createUserUseCase = new createUserUseCase_ts_1.CreateUserUseCase(usersRepositoryInMemory);
    });
    it('should be able to create a new user', async () => {
        const user = await createUserUseCase.execute({
            name: 'testee',
            email: 'teste@gmail.com',
            password: '1234565',
            confirmPassword: '123456',
            isAdmin: false,
            departament: 'development',
            avatar: 'avatar',
            created_at: new Date(),
            updated_at: new Date()
        });
        console.log(user);
        expect(user).toHaveProperty('id');
    });
});
