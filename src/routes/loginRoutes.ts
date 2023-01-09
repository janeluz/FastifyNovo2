import loginController from '../../src/session';


export async function loginRoutes(app:any,opts:any,done:any){
    app.post('/', async(request:any, reply: any) => {
        return loginController().handle(request,reply);
    });
    done();
    }