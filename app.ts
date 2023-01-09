
import Fastify, { FastifyInstance } from "fastify";
import fastifyPostgres from "@fastify/postgres";
import { usersRoutes } from "./src/routes/userRoutes";
import { loginRoutes } from "./src/routes/loginRoutes";
import { tasksRoutes } from "./src/task/tasksRoutes";

// import { indexRoutes } from "./tasks";





const app: FastifyInstance = Fastify({ logger: true });


app.register(fastifyPostgres, {
    connectionString: 'postgres://jane:271219@localhost:5432/fastifydb'
});

// app.register(indexRoutes);
// app.register(ensureAuthenticated);
app.register(usersRoutes, { prefix: '/users' });
app.register(loginRoutes, { prefix: '/login' });
app.register(tasksRoutes, { prefix: '/tasks' });


// app.register(contentParser);



export { app };
