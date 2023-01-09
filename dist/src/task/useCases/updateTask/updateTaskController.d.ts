import { UpdateTaskUseCase } from "./updateTaskUseCase";
declare class UpdateTaskController {
    private updateTaskUseCase;
    constructor(updateTaskUseCase: UpdateTaskUseCase);
    handle(request: any, reply: any): Promise<Response>;
}
export { UpdateTaskController };
