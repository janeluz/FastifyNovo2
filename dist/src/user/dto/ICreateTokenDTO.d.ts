interface ICreateTokenDTO {
    user_id: string;
    expires_date: Date;
    refresh_token: string;
}
export { ICreateTokenDTO };
