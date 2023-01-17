import { ICreateUserDTO, IUsersRepository } from "../dto/ICreateDTO";
import { User } from "../dto/userModel";
declare class UsersRepository implements IUsersRepository {
    constructor();
    findById(id: string): Promise<User>;
    create({ name, email, password, isAdmin, departament }: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    listAllUser(): Promise<User[]>;
    update(id: string, body: any): Promise<User>;
}
export { UsersRepository };
