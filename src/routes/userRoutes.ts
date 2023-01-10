import listUserController from "../../src/user/useCases/listUser";
import createUserController from "../../src/user/useCases/createUser";
import listUserByIdController from "../../src/user/useCases/listById";
import updateUserController from "../../src/user/useCases/updateUser";

// import upload from "../../src/config/upload";

// import { ensureAuthenticated } from "../../src/plugin/ensureAuthenticated";


export async function usersRoutes(app:any,opts:any,done:any){
    // const uploadAvatar = multer(upload);

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
// app.path('/avatar/:id', uploadAvatar.single('avatar'),(request:any, reply:any) => {
//     return uploadAvatarController().handle(request,reply);
// });

done();
}


