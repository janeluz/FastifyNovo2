
import Fastify, { FastifyInstance } from "fastify";
import multipart from '@fastify/multipart';
import fastifyPostgres from "@fastify/postgres";
import { usersRoutes } from "./src/routes/userRoutes";
import { loginRoutes } from "./src/routes/loginRoutes";
import { tasksRoutes } from "./src/routes/tasksRoutes";
import multer from "multer";


const app: FastifyInstance = Fastify({ logger: true });


app.register(fastifyPostgres, {
    connectionString: 'postgres://jane:271219@localhost:5432/fastifydb'
});

app.register(fastifyPostgres,{
    name:"test",
    connectionString: 'postgres://process.env.POSTGRES_USER:process.env.POSTGRES_PASSWORD@process.env.POSTGRES_SERVICE:process.env.POSTGRES_PORT/process.env.NODE_ENV'
})

// app.register(indexRoutes);
// app.register(ensureAuthenticated);

app.register(usersRoutes, { prefix: '/users' });
app.register(loginRoutes, { prefix: '/login' });
app.register(tasksRoutes, { prefix: '/tasks' });



export { app };
