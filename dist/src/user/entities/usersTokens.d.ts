declare class UserTokens {
    id?: string;
    user_id: string;
    refresh_token: string;
    created_at: Date;
    constructor(user_id: string, refresh_token: string, created_at: Date);
}
export default UserTokens;
