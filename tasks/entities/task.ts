import { BlobOptions } from 'buffer';
import { v4 as uuidV4 } from 'uuid';
class Task {
  id?: string;
  name: string;
  user_id: string;
  description: string;
  done: boolean;
  created_at?: Date;
  update_at?:Date;

  constructor(name:string, user_id:string,description:string,done:boolean){
    
    this.name= name;
    this.user_id = user_id;
    this.description = description;
    this.created_at = new Date();
    this.update_at = new Date();
    this.done = done;
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export {Task};
