import { app } from "app";
import UserTokens from "../entities/usersTokens";
import { IUsersTokensRepository } from "./IUsersTokensRepository";
import { v4 as uuidv4 } from 'uuid';
import { ICreateTokenDTO } from "../dto/ICreateTokenDTO";

class UsersTokensRepository implements IUsersTokensRepository {
    constructor(){}

    async create({
        expires_date,
        refresh_token,
        user_id
        
    }:ICreateTokenDTO):Promise<UserTokens> {
     const client = await app.pg.connect();
     const id = uuidv4();
     const created_at = new Date();

     const query = (`INSERT INTO usersTokens(id,user_id,expires_date,refresh_token,created_at)
            VALUES($1,$2,$3,$4,$5)`)
            const values = [id, user_id,expires_date,refresh_token,created_at]

            const userToken = await client.query(query, values)
            return userToken as any;
    }

}

export { UsersTokensRepository };