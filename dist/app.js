"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const postgres_1 = __importDefault(require("@fastify/postgres"));
const userRoutes_1 = require("./src/routes/userRoutes");
const loginRoutes_1 = require("./src/routes/loginRoutes");
const tasksRoutes_1 = require("./src/routes/tasksRoutes");
const app = (0, fastify_1.default)({ logger: true });
exports.app = app;
app.register(postgres_1.default, {
    connectionString: 'postgres://jane:271219@localhost:5432/fastifydb'
});
app.register(postgres_1.default, {
    name: "test",
    connectionString: 'postgres://process.env.POSTGRES_USER:process.env.POSTGRES_PASSWORD@process.env.POSTGRES_SERVICE:process.env.POSTGRES_PORT/process.env.NODE_ENV'
});
// app.register(indexRoutes);
// app.register(ensureAuthenticated);
app.register(userRoutes_1.usersRoutes, { prefix: '/users' });
app.register(loginRoutes_1.loginRoutes, { prefix: '/login' });
app.register(tasksRoutes_1.tasksRoutes, { prefix: '/tasks' });
