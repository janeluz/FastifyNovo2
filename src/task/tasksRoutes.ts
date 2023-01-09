import listTasksController from "./useCases/listTask";
import createTasksController from "./useCases/createTask";
import deleteTaskController from "./useCases/deleteTask";
import listTasksByDoneController from "./useCases/listByDone";
import updateTaskController from "./useCases/updateTask";
import { ensureAuthenticated } from "../../src/plugin/ensureAuthenticated";


export async function tasksRoutes(app: any, opts: any, done: any) {

    app.get('/', async (request: any, reply: any) => {
        return listTasksController().handle(request, reply);
    });


    app.post('/teste', async (request: any, reply: any) => {
        return createTasksController().handle(request, reply)
    });


    app.delete('/:id', async (request: any, reply: any) => {
        return deleteTaskController().handle(request, reply)
    });

    app.get('/:done', async (request: any, reply: any) => {
        return listTasksByDoneController().handle(request, reply)
    });


    app.put('/:id', async (request: any, reply: any) => {
        return updateTaskController().handle(request, reply)
    });

    done();
}
