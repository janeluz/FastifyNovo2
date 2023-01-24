import { ensureAuthenticated } from "../../src/plugin/ensureAuthenticated";
import multer from "fastify-multer"
import upload from "../../src/plugin/upload";
import listUserController from "../../src/user/useCases/listUser";
import createUserController from "../../src/user/useCases/createUser";
import listUserByIdController from "../../src/user/useCases/listById";
import updateUserController from "../../src/user/useCases/updateUser";
import updateUserAvatarController from "../../src/user/useCases/updateUserAvatar";
import fastifyMultipart from "@fastify/multipart";

// import upload from "../../src/config/upload";

// import { ensureAuthenticated } from "../../src/plugin/ensureAuthenticated";


export async function usersRoutes(app:any,opts:any,done:any){
    app.register(multer.contentParser)
    const uploadAvatar = multer()

app.get('/', async(request: any, reply: any) => {
    return listUserController().handle(request,reply);
});
    

app.post('/', async(request:any, reply: any) => {
 return createUserController().handle(request,reply);
});


app.get('/:id', async(request:any, reply: any) => {
    return listUserByIdController().handle(request,reply);
});

app.put('/:id',async (request:any, reply:any) => {
    return updateUserController().handle(request,reply);
})
app.patch('/avatar',{preHandler:[ensureAuthenticated,uploadAvatar.single('avatar')]},(request:any, reply:any) => {
    return updateUserAvatarController().handle(request,reply);
});

done();
}


