"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRoutes = void 0;
const listTask_1 = __importDefault(require("./useCases/listTask"));
const createTask_1 = __importDefault(require("./useCases/createTask"));
const deleteTask_1 = __importDefault(require("./useCases/deleteTask"));
const listByDone_1 = __importDefault(require("./useCases/listByDone"));
const updateTask_1 = __importDefault(require("./useCases/updateTask"));
async function tasksRoutes(app, opts, done) {
    app.get('/', async (request, reply) => {
        return (0, listTask_1.default)().handle(request, reply);
    });
    app.post('/teste', async (request, reply) => {
        return (0, createTask_1.default)().handle(request, reply);
    });
    app.delete('/:id', async (request, reply) => {
        return (0, deleteTask_1.default)().handle(request, reply);
    });
    app.get('/:done', async (request, reply) => {
        return (0, listByDone_1.default)().handle(request, reply);
    });
    app.put('/:id', async (request, reply) => {
        return (0, updateTask_1.default)().handle(request, reply);
    });
    done();
}
exports.tasksRoutes = tasksRoutes;
