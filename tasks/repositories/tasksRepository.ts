
import { app } from "../../app";
import { ICreateTaskDTO, ITasksRepository } from "../dto/ICreateDTO";
import { Task } from "../entities/task";
import { v4 as uuidv4 } from 'uuid';

class TasksRepository implements ITasksRepository{
  
  constructor(){}
  async listAllTask(): Promise<Task[]> {
    const client = await app.pg.connect();
    try {
      const { rows } = await client.query('SELECT * FROM tasks');
      console.log(rows)
      return rows as any;
    } catch (err) {
      throw new Error('User not found!!')
    }
  }
   async create({name,user_id,description,done}: ICreateTaskDTO): Promise<Task> {
    const client = await app.pg.connect();
      const id = uuidv4();
        const query = {
      text: `INSERT INTO tasks(id,name, user_id,description,done)
          VALUES($1,$2,$3,$4,$5) RETURNING*`,
       values: [id,name,user_id,description,done]}
       try {
        
        const {rows} = await client.query(query)
        
        console.log(rows[0])
       
    } catch (err) {
        throw new Error('Task not found!!')
    }
    return query as any;
}
async deleteById(id: string):Promise<Response> {
   const client = await app.pg.connect();
  try {
    const {rows} =  await client.query( `DELETE FROM tasks
    WHERE id = $1 RETURNING *`)
    console.log(rows[0])
    return rows[0] as any;
} catch(err) {
    throw new Error()
}

 };
  async findById(id: string):Promise<Task> {
    const client = await app.pg.connect();
    const task = await client.query(`SELECT * FROM tasks WHERE id = $1 RETURNING *`);
    console.log(task.rows[0])
    return task.rows[0] as any;

}
findByName(name: string): Promise<Task> {
  throw new Error("Method not implemented.");
}

  
 
}
  

  export{ TasksRepository};