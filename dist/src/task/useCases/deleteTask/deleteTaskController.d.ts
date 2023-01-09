import { DeleteTaskUseCase } from "./deleteTaskUseCase";
declare class DeleteTaskController {
    private deleteTaskUseCase;
    constructor(deleteTaskUseCase: DeleteTaskUseCase);
    handle(request: any, reply: any): Promise<void>;
}
export { DeleteTaskController };
