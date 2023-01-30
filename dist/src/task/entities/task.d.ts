declare class Task {
    id?: string;
    name: string;
    user_id: string;
    description: string;
    done: boolean;
    start_task?: Date;
    end_task?: Date;
    total: number;
    created_at?: Date;
    update_at?: Date;
    constructor(name: string, user_id: string, description: string, done: boolean, total: number);
}
export { Task };
