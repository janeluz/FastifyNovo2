"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const ensureAuthenticated_1 = require("../../src/plugin/ensureAuthenticated");
const fastify_multer_1 = __importDefault(require("fastify-multer"));
const upload_1 = __importDefault(require("../../src/plugin/upload"));
const listUser_1 = __importDefault(require("../../src/user/useCases/listUser"));
const createUser_1 = __importDefault(require("../../src/user/useCases/createUser"));
const listById_1 = __importDefault(require("../../src/user/useCases/listById"));
const updateUser_1 = __importDefault(require("../../src/user/useCases/updateUser"));
const updateUserAvatar_1 = __importDefault(require("../../src/user/useCases/updateUserAvatar"));
// import upload from "../../src/config/upload";
// import { ensureAuthenticated } from "../../src/plugin/ensureAuthenticated";
async function usersRoutes(app, opts, done) {
    app.register(fastify_multer_1.default.contentParser);
    const uploadAvatar = (0, fastify_multer_1.default)(upload_1.default.upload('./tmp/avatar'));
    app.get('/', async (request, reply) => {
        return (0, listUser_1.default)().handle(request, reply);
    });
    app.post('/', async (request, reply) => {
        return (0, createUser_1.default)().handle(request, reply);
    });
    app.get('/:id', async (request, reply) => {
        return (0, listById_1.default)().handle(request, reply);
    });
    app.put('/:id', async (request, reply) => {
        return (0, updateUser_1.default)().handle(request, reply);
    });
    app.patch('/avatar', { preHandler: [ensureAuthenticated_1.ensureAuthenticated, uploadAvatar.single('avatar')] }, (request, reply) => {
        return (0, updateUserAvatar_1.default)().handle(request, reply);
    });
    done();
}
exports.usersRoutes = usersRoutes;
