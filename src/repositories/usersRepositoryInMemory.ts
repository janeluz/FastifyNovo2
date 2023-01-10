import { User } from "../../src/user/dto/userModel";
import { ICreateUserDTO, IUsersRepository } from "../../src/user/dto/ICreateDTO";



class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    email,
    password,
    isAdmin,
    departament,
    avatar
  }: ICreateUserDTO): Promise<User> {
    const user = new User(name, email, password,isAdmin, departament as any ,avatar as any);

    Object.assign(user, {
      name,
      email,
      password,
      avatar,
      isAdmin,
      departament,
    });

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {

    const user = this.users.find((user) => user.email === email);

    return user as User;

  }

  async findById(id: string): Promise<User> {
   const user = this.users.find((user) => user.id === id);
    return user as User;
  }

  async listAllUser(): Promise<User[]> {
    return this.users;
  }
}

export { UsersRepositoryInMemory };