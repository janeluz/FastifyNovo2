
// import { IDateProvider } from "src/provider/DateProvider/IDateProvider";
// import { ITasksRepository } from "src/task/dto/ICreateDTO";

// // import { ITasksRepository } from "src/task/dto/ICreateDTO";
// interface IRequest{
//     id: string;
//     user_id : string;
// }

// class FinishTaskUseCase {
//     constructor(private tasksRepository: ITasksRepository,
//         private dateProvider: IDateProvider){}

//     async execute({id, user_id}:IRequest){
//        const task = await this.tasksRepository.findById(id);

//         if(!task){
//             throw new Error('Task does not exists!!')
//     }
//     const dateNow = this.dateProvider.dateNow();

//     const diffInHours = this.dateProvider.compareInHours(
//         dateNow,
//         task.end_task as any
//     );
//     if(diffInHours < )
//   }
// }

// export {FinishTaskUseCase};