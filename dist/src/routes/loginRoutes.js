"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const session_1 = __importDefault(require("../../src/session"));
async function loginRoutes(app, opts, done) {
    app.post('/login', async (request, reply) => {
        return (0, session_1.default)().handle(request, reply);
    });
    done();
}
exports.loginRoutes = loginRoutes;
