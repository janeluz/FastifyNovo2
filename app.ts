
import fastify, { FastifyInstance } from "fastify";
import fastifyPostgres from "@fastify/postgres";
import { usersRoutes } from "./src/routes/userRoutes";
import { loginRoutes } from "./src/routes/loginRoutes";
import { tasksRoutes } from "./tasks/tasksRoutes";
import { ensureAuthenticated } from "./src/plugin/ensureAuthenticated";
// import ensureAuthenticated from "./src/plugin/ensureAuthenticated";





const app:FastifyInstance = fastify({logger:true});


app.register(fastifyPostgres,{
    connectionString: 'postgres://jane:271219@localhost:5432/fastifydb'     
});
app.register(usersRoutes,{prefix:'/users'});
app.register(loginRoutes,{prefix:'/login'});
app.register(tasksRoutes,{prefix:'/tasks'});




export{ app };
