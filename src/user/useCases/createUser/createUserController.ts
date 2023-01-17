import { CreateUserUseCase } from './createUserUseCase.ts';
import { addUser } from '../../../../src/plugin/validationUser';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase){}
 
   async handle(request: any, reply:any): Promise<void> {

    const {name,email,password,confirmPassword,isAdmin,departament} = addUser.parse(request.body);
      try{
        const newUser = await this.createUserUseCase.execute({name, email,password,confirmPassword,isAdmin,departament});
        return reply.code(201).send(newUser);
      } catch(error: any) {
    reply.code(400).send(error.message);
    }
  }
}
export { CreateUserController};