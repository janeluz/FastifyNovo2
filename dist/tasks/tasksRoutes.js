"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRoutes = void 0;
const listTask_1 = __importDefault(require("./useCases/listTask"));
const createTask_1 = __importDefault(require("./useCases/createTask"));
const ensureAuthenticated_1 = __importDefault(require("../src/plugin/ensureAuthenticated"));
async function tasksRoutes(app, opts, done) {
    app.get('/', async (request, reply) => {
        return (0, listTask_1.default)().handle(request, reply);
    });
    app.post('/', { preHandler: [ensureAuthenticated_1.default] }, async (request, reply) => {
        return (0, createTask_1.default)().handle(request, reply);
    });
    done();
}
exports.tasksRoutes = tasksRoutes;
