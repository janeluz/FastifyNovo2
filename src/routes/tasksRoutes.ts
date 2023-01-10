import listTasksController from "../task/useCases/listTask";
import createTasksController from "../task/useCases/createTask";
import deleteTaskController from "../task/useCases/deleteTask";
import listTasksByDoneController from "../task/useCases/listByDone";
import updateTaskController from "../task/useCases/updateTask";
import { ensureAuthenticated } from "../plugin/ensureAuthenticated";


export async function tasksRoutes(app: any, opts: any, done: any) {

    app.get('/',async (request: any, reply: any) => {
        return listTasksController().handle(request, reply);
    });


    app.post('/',{preHandler: ensureAuthenticated},async (request: any, reply: any) => {
        return createTasksController().handle(request, reply)
    });


    app.delete('/:id',{preHandler: ensureAuthenticated}, async (request: any, reply: any) => {
        return deleteTaskController().handle(request, reply)
    });

    app.get('/:done', async (request: any, reply: any) => {
        return listTasksByDoneController().handle(request, reply)
    });


    app.put('/:id',{preHandler: ensureAuthenticated},async(request: any, reply: any) => {
        return updateTaskController().handle(request, reply)
    });

    done();
}
