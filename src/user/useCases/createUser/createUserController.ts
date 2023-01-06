import { CreateUserUseCase } from './createUserUseCase.ts';
import { z } from 'zod';

class CreateUserController {
  constructor(private createuserUseCase: CreateUserUseCase){}
 
   async handle(request: any, reply:any): Promise<void> {
    const addUser = z.object({
      name: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
      avatar: z.string(),
      isAdmin: z.boolean(),
      departament: z.enum(['development','IA','RPA'])
    });
    const {name,email,password,confirmPassword,avatar,isAdmin,departament} = addUser.parse(request.body);
      try{
             if(password !== confirmPassword){
                throw new Error('Password and Confirm Password must be the same');
              }
        const newUser = await this.createuserUseCase.execute({name, email,password,confirmPassword,avatar,isAdmin,departament});
        return reply.code(201).send(newUser);
      } catch(error: any) {
    reply.code(400).send(error.message);
    }
  }
}
export { CreateUserController};