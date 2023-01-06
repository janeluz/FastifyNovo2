declare class User {
    id?: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    departament: ['development' | 'IA' | 'RPA'];
    avatar?: string;
    created_at?: Date;
    update_at?: Date;
    constructor(name: string, email: string, password: string, isAdmin: boolean, departament: ['development' | 'IA' | 'RPA'], avatar: string);
}
export { User };
