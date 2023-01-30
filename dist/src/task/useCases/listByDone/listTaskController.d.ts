import { Task } from "src/task/entities/task";
import { ListTasksByDoneUseCase } from "./listTaskUseCase";
declare class ListTasksByDoneController {
    private listTasksByDoneUseCase;
    constructor(listTasksByDoneUseCase: ListTasksByDoneUseCase);
    handle(request: any, reply: any): Promise<Task>;
}
export { ListTasksByDoneController };
