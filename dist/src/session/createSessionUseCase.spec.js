"use strict";
// import { UsersRepositoryInMemory } from "../../src/user/repositories/usersRepositoryInMemory";
// import { ICreateUserDTO } from "../../src/user/dto/ICreateDTO";
// import { CreateUserUseCase } from "../../src/user/useCases/createUser/createUserUseCase.ts";
// import { CreateSessionUseCase } from "./createSessionUseCase";
// let createSessionUseCase: CreateSessionUseCase;
// let usersRepositoryInMemory: UsersRepositoryInMemory;
// let createUserUseCase: CreateUserUseCase;
// describe("Authenticate User", () => {
//     beforeEach(() => {
//         usersRepositoryInMemory = new UsersRepositoryInMemory();
//         createSessionUseCase = new CreateSessionUseCase(
//             usersRepositoryInMemory
//         );
//         createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
//     });
//     it("should be able to authenticate an user", async () => {
//         const user: ICreateUserDTO = {
//             name: "User Test",
//             email: "teste@gmail.com",
//             password: "123456",
//             avatar: "avatar",
//             isAdmin: false,
//             departament: "development",
//         };
//         await createUserUseCase.execute(user);
//         const result = await createSessionUseCase.execute({
//             email: user.email,
//             password: user.password,
//         });
//         expect(result).toHaveProperty("token");
//     });
//     it("should not be able to authenticate an nonexistent user", () => {
//         expect(async () => {
//             await createSessionUseCase.execute({
//                 email: "teste@errado.com",
//                 password: "123456",
//             });
//         }).rejects.toBeInstanceOf(Error);
//     });
//     it("should not be able to authenticate with incorrect password", () => {
//         expect(async () => {
//             const user: ICreateUserDTO = {
//                 name: "User Test Error",
//                 email: "testeError",
//                 password: "123456",
//                 avatar: "avatar",
//                 isAdmin: false,
//                 departament: "development",
//             };
//             await createUserUseCase.execute(user)
//             await expect(
//                 createSessionUseCase.execute({
//                     email: user.email,
//                     password: "incorrect Password",
//                 });
//             ).rejects.toEqual(Error('Email or password incorrect'));
//     });
// });
// });
