"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const auth_1 = __importDefault(require("../config/auth"));
const jsonwebtoken_1 = require("jsonwebtoken");
class CreateSessionUseCase {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(email, password) {
        console.log("testeeeee", email, password);
        const user = await this.usersRepository.findByEmail(email);
        console.log("testeeeee2", user);
        if (!user) {
            throw new Error('Email or Password incorrect');
        }
        const { secretToken, expiresInToken } = auth_1.default;
        const passwordMatch = await (0, bcryptjs_1.compare)(password, user.password);
        console.log("testee de senhas", passwordMatch);
        if (!passwordMatch) {
            throw new Error('Email or Password incorrect');
        }
        const token = (0, jsonwebtoken_1.sign)({ email }, secretToken, {
            subject: user.id,
            expiresIn: expiresInToken,
        });
        const tokenReturn = {
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        };
        return tokenReturn;
    }
}
exports.CreateSessionUseCase = CreateSessionUseCase;
