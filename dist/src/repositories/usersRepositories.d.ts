import { ICreateUserDTO, IUsersRepository } from "../user/dto/ICreateDTO";
import { User } from "../user/dto/userModel";
declare class UsersRepository implements IUsersRepository {
    constructor();
    createTable(): Promise<import("pg").QueryResult<any>>;
    findById(id: string): Promise<User>;
    create({ name, email, password, avatar, isAdmin, departament }: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    listAllUser(): Promise<User[]>;
}
export { UsersRepository };
