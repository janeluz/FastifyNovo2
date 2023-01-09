import { ListTasksByDoneUseCase } from "./listTaskUseCase";
declare class ListTasksByDoneController {
    private listTasksByDoneUseCase;
    constructor(listTasksByDoneUseCase: ListTasksByDoneUseCase);
    handle(request: any, reply: any): Promise<void>;
}
export { ListTasksByDoneController };
