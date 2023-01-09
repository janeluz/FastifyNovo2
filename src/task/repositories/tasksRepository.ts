
import { app } from "../../../app";
import { ICreateTaskDTO, ITasksRepository } from "../dto/ICreateDTO";
import { Task } from "../entities/task";
import { v4 as uuidv4 } from 'uuid';

class TasksRepository implements ITasksRepository {

  constructor() { }

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
  async create({ name, user_id, description, done }: ICreateTaskDTO): Promise<Task> {
    const client = await app.pg.connect();
    const id = uuidv4();
    const created_at = new Date();
    const updated_at = new Date();

    const query =(`INSERT INTO tasks(id,name, user_id,description,done,created_at,updated_at)
          VALUES($1,$2,$3,$4,$5,$6,$7)`)
      const values= [id, name, user_id, description, done, created_at, updated_at]

      const task = await client.query(query,values)
      
        return task as any;


  }
  async deleteById(id: string): Promise<void> {
    const client = await app.pg.connect();
  
      const user = await client.query(`DELETE FROM tasks
      WHERE id = $1`,[id])
      console.log(user)
      return user as any;

  };

  async findById(id: string): Promise<Task> {
    const client = await app.pg.connect();
    const task = await client.query(`SELECT * FROM tasks WHERE id = $1`,[id]);
    
    return task as any;

  }
   async findByName(name: string): Promise<Task> {
    const client = app.pg.connect();
    const task = await (await client).query('SELECT * FROM users WHERE name = $1', [name])
       return task as any;
  }
  async findByDone(done: boolean): Promise<Task> {
    const client = app.pg.connect();

      const task= await (await client).query(`SELECT * FROM tasks WHERE done = $1`, [done]);
      return task as any;
    
  }
async update(id: string, body: any): Promise<Task> {
    const client = await app.pg.connect();
    const updated_at = new Date();
    const query = (`UPDATE tasks SET name = $1, description = $2, done = $3, updated_at = $4
          WHERE id = $5`)
     const  values = [body.name, body.description, body.done, updated_at, id]

      const task = await client.query(query, values) 
      return task as any;

}
}

export { TasksRepository };