import { ListTasksUseCase } from "./listTaskUseCase";
declare class ListTasksController {
    private listTasksUseCase;
    constructor(listTasksUseCase: ListTasksUseCase);
    handle(request: any, reply: any): Promise<void>;
}
export { ListTasksController };
