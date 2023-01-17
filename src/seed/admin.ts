import { app } from "app";
import { v4 as uuidV4 } from "uuid";
import { hash } from "bcryptjs";



async function  create(){
    const client = app.pg.connect();

    const id = uuidV4();
    const password = await hash("admin", 8);

    await (await client).query(`INSERT INTO USERS(id, name, email, password,avatar,isAdmin,departament,created_at,updated_at)
    values('${id}', 'Jane', 'admin@gmail.com', '${password}', 'avatar', true, 'development', '${new Date()})', '${new Date()})'`,
    );
     (await client).release
     
    ();
}














