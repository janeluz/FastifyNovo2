import { app } from "../../../app";
import { v4 as uuidv4 } from 'uuid';
import { ICreateUserDTO, IUsersRepository } from "../dto/ICreateDTO";
import { User } from "../entities/userModel";


class UsersRepository implements IUsersRepository {

  constructor() { }

  // async  createTable () {
  //   const client = await app.pg.connect();
  //   const query = `CREATE TABLE IF NOT EXISTS users (
  //     id uuid PRIMARY KEY,
  //     name varchar(255) NOT NULL,
  //     email varchar(255) NOT NULL,
  //     password varchar(255) NOT NULL,
  //     avatar varchar(255) NOT NULL,
  //     isAdmin boolean NOT NULL,
  //     departament varchar(255) NOT NULL
  //     created_at timestamp NOT NULL,
  //     updated_at timestamp NOT NULL);`

  //     return app.pg.transact(async(client) => {
  //       const result = await client.query(query)
  //       return result
  //     })
  //   }

  async findById(id: string): Promise<User> {
    const client = await app.pg.connect();
    const { rows } = await client.query('SELECT * FROM users where id = $1', [id])

    return rows as any;

  }

  async create({ name, email, password, avatar,isAdmin, departament }: ICreateUserDTO): Promise<User> {
    const client = await app.pg.connect();
    const id = uuidv4();
    const created_at = new Date();
    const updated_at = new Date();

    const query = (`INSERT INTO users(id,name,email,password,avatar,isAdmin,departament,created_at,updated_at)
            VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`)
    const values = [id, name, email, password,avatar,isAdmin,departament, created_at, updated_at]

    const user = await client.query(query, values)
    return user as any;

  }
  async findByEmail(email: string): Promise<User> {
    const client = await app.pg.connect();

    const { rows } = await client.query(`SELECT * FROM users where email = $1`, [email]);

    return rows[0] as any;

  }
  async listAllUser(): Promise<User[]> {
    const client = app.pg.connect();

    const { rows } = await (await client).query('SELECT * FROM users');
    return rows as any;

  }

  async update(id: string, body: any): Promise<User> {
    const client = await app.pg.connect();
    const updated_at = new Date();
    const query = (`UPDATE users SET name = $1, email = $2, password = $3, updated_at = $4
            WHERE id = $5`)
    const values = [body.name, body.email, body.password, updated_at, id]

    const user = await client.query(query, values)
    return user as any;

  }
  async updateAvatar(id: string, body:any): Promise<User> {
    const client = await app.pg.connect();
    const updated_at = new Date();
    const query = (`UPDATE users SET avatar = $1,updated_at = $2
            WHERE id = $3`)
    const values = [body.avatar, updated_at, id]

    const userAvatar = await client.query(query, values)
    return userAvatar as any;

}
}

export { UsersRepository };