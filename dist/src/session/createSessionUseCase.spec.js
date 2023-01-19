"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepositoryInMemory_1 = require("../../src/user/repositories/usersRepositoryInMemory");
const createUserUseCase_ts_1 = require("../../src/user/useCases/createUser/createUserUseCase.ts");
const createSessionUseCase_1 = require("./createSessionUseCase");
let createSessionUseCase;
let usersRepositoryInMemory;
let createUserUseCase;
describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new usersRepositoryInMemory_1.UsersRepositoryInMemory();
        createSessionUseCase = new createSessionUseCase_1.CreateSessionUseCase(usersRepositoryInMemory);
        createUserUseCase = new createUserUseCase_ts_1.CreateUserUseCase(usersRepositoryInMemory);
    });
    it("should be able to authenticate an user", async () => {
        const user = {
            name: "User Test",
            email: "teste@gmail.com",
            password: "123456",
            isAdmin: false,
            departament: "development",
        };
        await createUserUseCase.execute(user);
        const result = await createSessionUseCase.execute({
            email: user.email,
            password: user.password,
        });
        expect(result).toHaveProperty("token");
    });
    it("should not be able to authenticate an nonexistent user", () => {
        expect(async () => {
            await createSessionUseCase.execute({
                email: "teste@errado.com",
                password: "123456",
            });
        }).rejects.toBeInstanceOf(Error);
    });
    it("should not be able to authenticate with incorrect password", () => {
        expect(async () => {
            const user = {
                name: "User Test Error",
                email: "testeError",
                password: "123456",
                isAdmin: false,
                departament: "development",
            };
            await createUserUseCase.execute(user);
            await expect(createSessionUseCase.execute({
                email: user.email,
                password: "incorrect Password",
            })).rejects.toEqual(Error('Email or password incorrect'));
        });
    });
});
