declare class Task {
    id?: string;
    name: string;
    user_id: string;
    description: string;
    done: boolean;
    created_at?: Date;
    update_at?: Date;
    constructor(name: string, user_id: string, description: string, done: boolean);
}
export { Task };
