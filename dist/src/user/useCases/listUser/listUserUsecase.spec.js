"use strict";
// import { UsersRepositoryInMemory } from "../../../../src/repositories/usersRepositoryInMemory";
// import listUsersUseCase, { ListUsersUseCase } from "./listUsersUseCase";
// describe("List Users", () => {
//     beforeEach(()=> {
//      let  usersRepositoryInMemory = new UsersRepositoryInMemory();
//     let   listUsersUseCase = new ListUsersUseCase(usersRepositoryInMemory);
//     });
//     it("should be able to list all available cars", async () => {
//       const user = await usersRepositoryInMemory.create({
//         name: 'testee',
//         email:'teste@gmail.com',
//         password: '1234565',
//         confirmPassword: '123456',
//         departament:'development',
//         created_at: new Date(),
//         updated_at: new Date()
//       });
//       const users = await listUsersUseCase.execute({});
//       //eu espero que o que retorne seja um array com esse carro que foi criado
//       expect(users).toEqual([user]);
//   });
//   it("should be able to list all available users by name", async() => {
//     const user = await usersRepositoryInMemory.create({
//       name: 'testee',
//       email:'teste@gmail.com',
//       password: '1234565',
//       confirmPassword: '123456',
//       departament:'development',
//       created_at: new Date(),
//       updated_at: new Date()
//     });
//     const users = await listUsersUseCase.execute({
//       name:'teste',
//     });
//     //eu espero que o que retorne seja um array com esse user que foi criado
//     expect(users).toEqual([user]);
//   })
// });
