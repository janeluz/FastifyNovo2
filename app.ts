
import Fastify, { FastifyInstance } from "fastify";
import fastifyPostgres from "@fastify/postgres";
import { usersRoutes } from "./src/routes/userRoutes";
import { loginRoutes } from "./src/routes/loginRoutes";
import { tasksRoutes } from "./src/routes/tasksRoutes";
// import multer from "multer";
import multer from 'fastify-multer'
// import multipart from '@fastify/multipart'
import uploadConfig from "./src/plugin/upload";

const app: FastifyInstance = Fastify({ logger: true });

// const upload = multer(uploadConfig)

app.register(multer.contentParser);

app.register(fastifyPostgres, {
    connectionString: 'postgres://jane:271219@localhost:5432/fastifydb'
});

app.register(fastifyPostgres,{
    name:"test",
    connectionString: 'postgres://process.env.POSTGRES_USER:process.env.POSTGRES_PASSWORD@process.env.POSTGRES_SERVICE:process.env.POSTGRES_PORT/process.env.NODE_ENV'
})
 
// app.register(indexRoutes);
// app.register(ensureAuthenticated);
app.post('/init-table',async()=> {
    const createTable = `
    CREATE TABLE IF NOT EXISTS users (
            id uuid PRIMARY KEY,
            name varchar(255) NOT NULL,
            email varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL,
            avatar varchar(255)  NULL,
            isAdmin boolean NOT NULL DEFAULT FALSE,
            departament varchar(255) NOT NULL
            created_at timestamp NOT NULL,
            updated_at timestamp NOT NULL);`;
      
            return app.pg.transact(async(client) => {
              const result = await client.query(createTable)
              return result
            })
          }
    )

app.register(usersRoutes, { prefix: '/users' });
app.register(loginRoutes, { prefix: '/login' });
app.register(tasksRoutes, { prefix: '/tasks' });



export { app };
