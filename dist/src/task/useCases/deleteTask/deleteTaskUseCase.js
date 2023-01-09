"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskUseCase = void 0;
class DeleteTaskUseCase {
    tasksRepository;
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async execute(id) {
        // const verifyTask = await this.tasksRepository.findById(id);
        // if (!verifyTask) {
        //   throw new Error(" Task not exists");
        // }
        const user = await this.tasksRepository.deleteById(id);
        return user;
    }
}
exports.DeleteTaskUseCase = DeleteTaskUseCase;
