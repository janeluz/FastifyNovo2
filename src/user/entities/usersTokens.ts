import { v4 as uuidV4 } from 'uuid';

class UserTokens {
    id?: string;
    user_id: string;
    refresh_token: string;
    created_at :  Date;

constructor(user_id:string, refresh_token:string,created_at:Date){
  
    this.user_id = user_id;
    this.refresh_token = refresh_token;
    this.created_at = created_at;
    if (!this.id) {
        this.id = uuidV4();
      }
    }
}
export default UserTokens;