import { Task } from "../../entities/task";
import { CreateTaskUseCase } from "./taskUseCase";
declare class CreateTaskController {
    private createTaskUseCase;
    constructor(createTaskUseCase: CreateTaskUseCase);
    handle(request: any, reply: any): Promise<Task>;
}
export { CreateTaskController };
