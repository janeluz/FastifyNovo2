import { CreateUserUseCase } from "./createUserUseCase.ts";
import { UsersRepositoryInMemory } from "../../repositories/usersRepositoryInMemory";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);

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
