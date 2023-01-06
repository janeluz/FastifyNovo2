import { CreateSessionUseCase } from "./createSessionUseCase";



class SessionController {
    constructor(private createSessionUseCase: CreateSessionUseCase) { }
   async handle(request:any, reply:any): Promise<any> {
     const { email, password } = request.body;
        try {
            const session = await this.createSessionUseCase.execute(email, password);
            return reply.code(200).send(session);
        } catch (error: any) {
            return reply.code(400).send(error.message);
        }


   }
    
}

export { SessionController };