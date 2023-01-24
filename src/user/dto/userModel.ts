import { v4 as uuidV4 } from 'uuid';
class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  isAdmin:boolean;
  departament: 'development'|'IA'|'RPA';
  avatar?: string;
  created_at?: Date;
  update_at?:Date;

  constructor(name:string, email:string, password:string,avatar:string,isAdmin:boolean,departament:'development'|'IA'|'RPA'){
   
    this.name= name;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.isAdmin = isAdmin;
    this.departament = departament;
    this.created_at = new Date();
    this.update_at = new Date();
    if (!this.id) {
      this.id = uuidV4();
    }
    
  }
}
export {User};

