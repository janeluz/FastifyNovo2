
import { v4 as uuidV4 } from 'uuid';
class Task {
  id?: string;
  name: string;
  user_id: string;
  description: string;
  done: boolean;
  start_task?: Date;
  end_task?:Date;
  total:number;
  created_at?: Date;
  update_at?:Date;

  constructor(name:string, user_id:string,description:string,done:boolean,total:number){
    
    this.name= name;
    this.user_id = user_id;
    this.description = description;
    this.created_at = new Date();
    this.update_at = new Date();
    this.done = done;
    this.total = total;
    this.start_task = new Date();
    this.end_task = new Date();
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export {Task};
