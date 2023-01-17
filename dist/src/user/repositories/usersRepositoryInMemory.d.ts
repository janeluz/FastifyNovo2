import { User } from "../dto/userModel";
import { ICreateUserDTO, IUsersRepository } from "../dto/ICreateDTO";
declare class UsersRepositoryInMemory implements IUsersRepository {
    users: User[];
    create({ name, email, password, avatar, isAdmin, departament, }: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    listAllUser(): Promise<User[]>;
    update(id: string, body: any): Promise<User>;
}
export { UsersRepositoryInMemory };
