import { ICreateTokenDTO } from "../dto/ICreateTokenDTO";
import UserTokens from "../entities/usersTokens";
interface IUsersTokensRepository {
    create({ expires_date, refresh_token, user_id }: ICreateTokenDTO): Promise<UserTokens>;
}
export { IUsersTokensRepository };
