import { ListTasksUseCase } from "./listTasksUseCase";
declare class ListTasksController {
    private listTasksUseCase;
    constructor(listTasksUseCase: ListTasksUseCase);
    handle(request: any, reply: any): Promise<void>;
}
export { ListTasksController };
