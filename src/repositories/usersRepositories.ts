import { app } from "../../app";
import { v4 as uuidv4 } from 'uuid';
import { ICreateUserDTO, IUsersRepository } from "../user/dto/ICreateDTO";
import { User } from "../user/dto/userModel";


class UsersRepository implements IUsersRepository {

  constructor() { }

async  createTable () {
  const client = await app.pg.connect();
  const query = `CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    avatar varchar(255) NOT NULL,
    isAdmin boolean NOT NULL,
    departament varchar(255) NOT NULL
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL);`
  
    return app.pg.transact(async(client) => {
      const result = await client.query(query)
      return result
    })
  }

  async findById(id: string): Promise<User> {
    const client = await app.pg.connect();
    const { rows } = await client.query('select * from users where id = $1', [id])
    console.log(rows[0])
    return rows[0] as any;

  }

  async create({name, email, password, avatar, isAdmin, departament }: ICreateUserDTO): Promise<User> {
    const client = await app.pg.connect();
    const id = uuidv4();
    const created_at = new Date();
    const updated_at = new Date();

    const query = {
      text: `INSERT INTO users(id,name,email,password,avatar,isAdmin,departament,created_at,updated_at)
            VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      values: [id,name, email, password, avatar, isAdmin, departament, created_at, updated_at]
    }
    try {

      const { rows } = await client.query(query)
      console.log(rows[0])

    } catch (err) {
      throw new Error()
    }
    return query as any;

  }
  async findByEmail(email: string): Promise<User> {
    const client = await app.pg.connect();

    const { rows } = await client.query('select * from users where email = $1', [email])
    console.log(rows[0])
    return rows[0] as any;

  }
  async listAllUser(): Promise<User[]> {
    const client = app.pg.connect();
    try {
      const { rows } = await (await client).query('SELECT * FROM users');
      console.log(rows)
      return rows as any;
    } catch (err) {
      throw new Error('User not found!!')
    }
  }

}

export { UsersRepository };