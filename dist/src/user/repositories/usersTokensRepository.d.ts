import UserTokens from "../entities/usersTokens";
import { IUsersTokensRepository } from "./IUsersTokensRepository";
import { ICreateTokenDTO } from "../dto/ICreateTokenDTO";
declare class UsersTokensRepository implements IUsersTokensRepository {
    constructor();
    create({ expires_date, refresh_token, user_id }: ICreateTokenDTO): Promise<UserTokens>;
}
export { UsersTokensRepository };
