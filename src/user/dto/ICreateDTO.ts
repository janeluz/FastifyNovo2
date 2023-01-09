import { User } from "./userModel";


interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  isAdmin:boolean;
  departament: string;
  avatar?:string;
  created_at?: Date;
  updated_at?:Date;

}


interface IUsersRepository {
  findById(id: string): Promise<User>;
  findByEmail(email: string):Promise<User>;
  create({name, email,password,isAdmin,departament,avatar}: ICreateUserDTO): Promise<User>;
  listAllUser():Promise<User[]>;
  
}

export { ICreateUserDTO, IUsersRepository};