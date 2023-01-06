import listTasksController from "./useCases/listTask";
import createTasksController from "./useCases/createTask";
import {ensureAuthenticated} from "../src/plugin/ensureAuthenticated";




export async function tasksRoutes(app:any,opts:any,done:any){

    app.get('/', async(request: any, reply: any) => {
        return listTasksController().handle(request,reply);
    });
        
    
    app.post('/',{preHandler:[ensureAuthenticated]}, async(request:any, reply: any) => {
     return createTasksController().handle(request,reply);
    });
    
    done();
    }
    