"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const listUser_1 = __importDefault(require("../../src/user/useCases/listUser"));
const createUser_1 = __importDefault(require("../../src/user/useCases/createUser"));
const listById_1 = __importDefault(require("../../src/user/useCases/listById"));
// import uploadAvatarController from "../../src/user/useCases/updateUserAvatar";
// import upload from "../../src/config/upload";
// import multer from "fastify-multer";
// import { ensureAuthenticated } from "../../src/plugin/ensureAuthenticated";
async function usersRoutes(app, opts, done) {
    // const uploadAvatar = multer(upload);
    app.get('/', async (request, reply) => {
        return (0, listUser_1.default)().handle(request, reply);
    });
    app.post('/', async (request, reply) => {
        return (0, createUser_1.default)().handle(request, reply);
    });
    app.get('/:id', async (request, reply) => {
        return (0, listById_1.default)().handle(request, reply);
    });
    // app.path('/avatar',ensureAuthenticated, uploadAvatar.single('avatar'),(request:any, reply:any) => {
    //     return uploadAvatarController().handle(request,reply);
    // });
    done();
}
exports.usersRoutes = usersRoutes;
