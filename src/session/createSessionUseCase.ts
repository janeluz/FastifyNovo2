import { compare } from "bcryptjs";
import auth from "../config/auth";
import { sign } from "jsonwebtoken";
import { UsersRepository } from "../repositories/usersRepositories";


interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;

}
class CreateSessionUseCase {
    constructor(private usersRepository: UsersRepository) { }
    async execute(email: string, password: string): Promise<IResponse> {
        console.log("testeeeee", email, password)
        const user = await this.usersRepository.findByEmail(email);
        console.log("testeeeee2", user)
        if (!user) {
            throw new Error('Email or Password incorrect');
        }
        const { secretToken, expiresInToken } = auth;

        const passwordMatch = await compare(password, user.password);
        console.log("testee de senhas", passwordMatch)
        
        if (!passwordMatch) {
            throw new Error('Email or Password incorrect');
        }

        const token = sign({email }, secretToken, {
            subject: user.id,
            expiresIn: expiresInToken,
        });
        const tokenReturn: IResponse = {
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        };
       
        return tokenReturn;
        
    }
}

export { CreateSessionUseCase };