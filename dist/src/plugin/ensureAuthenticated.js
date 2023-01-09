"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const usersRepositories_1 = require("../repositories/usersRepositories");
// app.addHook('preHandler',(request: any, reply:any, done: any)=>{
async function ensureAuthenticated(request, reply, done) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new Error('token missing');
    }
    // [0] = Beaher
    // [1] = numero token
    const [, token] = authHeader.split(' ');
    try {
        const { sub: user_id } = (0, jsonwebtoken_1.verify)(token, '80db8eb05ec0a7b26a10db03cdd5dcc73');
        const usersRepository = new usersRepositories_1.UsersRepository();
        const user = usersRepository.findById(user_id);
        if (!user) {
            throw new Error('User does not exists!');
        }
        request.user = {
            id: user_id,
        };
        return done();
    }
    catch (error) {
        throw new Error('invalid token');
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
