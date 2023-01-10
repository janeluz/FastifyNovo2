import { User } from "../../src/user/dto/userModel";
import { ICreateUserDTO, IUsersRepository } from "../../src/user/dto/ICreateDTO";
declare class UsersRepositoryInMemory implements IUsersRepository {
    users: User[];
    create({ name, email, password, isAdmin, departament, avatar }: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    listAllUser(): Promise<User[]>;
}
export { UsersRepositoryInMemory };
