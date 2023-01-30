import { User } from "../entities/userModel";
import { ICreateUserDTO, IUsersRepository } from "../dto/ICreateDTO";



class UsersRepositoryInMemory implements IUsersRepository {
  updateAvatar(id: string, body: any): Promise<User> {
    throw new Error("Method not implemented.");
  }

  users: User[] = [];

  async create({
    name,
    email,
    password,
    avatar,
    isAdmin,
    departament,
    
  }: ICreateUserDTO): Promise<User> {
    const user = new User(name, email, password,avatar as any,isAdmin, departament as any);

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
  update(id: string, body: any): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

export { UsersRepositoryInMemory };