"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
async function authenticate(app, opts, done) {
    app.register(jwt_1.default, {
        secret: process.env.JWT_SECRET,
        sign: {
            expiresIn: '1h'
        }
    });
    app.decorate('authenticate', async (request, reply) => {
        try {
            await request.jwtVerify();
        }
        catch (err) {
            reply.send(err);
        }
    });
    done();
}
exports.default = (0, fastify_plugin_1.default)(authenticate);
