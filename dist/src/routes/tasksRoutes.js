"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRoutes = void 0;
const listTask_1 = __importDefault(require("../task/useCases/listTask"));
const createTask_1 = __importDefault(require("../task/useCases/createTask"));
const deleteTask_1 = __importDefault(require("../task/useCases/deleteTask"));
const listByDone_1 = __importDefault(require("../task/useCases/listByDone"));
const updateTask_1 = __importDefault(require("../task/useCases/updateTask"));
const ensureAuthenticated_1 = require("../plugin/ensureAuthenticated");
async function tasksRoutes(app, opts, done) {
    app.get('/', async (request, reply) => {
        return (0, listTask_1.default)().handle(request, reply);
    });
    app.post('/', { preHandler: ensureAuthenticated_1.ensureAuthenticated }, async (request, reply) => {
        return (0, createTask_1.default)().handle(request, reply);
    });
    app.delete('/:id', { preHandler: ensureAuthenticated_1.ensureAuthenticated }, async (request, reply) => {
        return (0, deleteTask_1.default)().handle(request, reply);
    });
    app.get('/:done', async (request, reply) => {
        return (0, listByDone_1.default)().handle(request, reply);
    });
    app.put('/:id', { preHandler: ensureAuthenticated_1.ensureAuthenticated }, async (request, reply) => {
        return (0, updateTask_1.default)().handle(request, reply);
    });
    done();
}
exports.tasksRoutes = tasksRoutes;
