

import { app } from 'app';

import *  as fastify from 'fastify';
import { v4 as uuidv4 } from 'uuid';


// async function usersRoutes(app: any,opts:any,done:any) {
//     const client = app.db.client;
    
//     app.get('/users', async (req: FastifyRequest, reply: FastifyReply) => {
//         try {
//             const users = await client.query('SELECT * FROM users');
//             reply.send(users);
//         } catch (err) {
//             reply.code(500).send('User is not found');
//         }
        
//     });

//     app.post('/users', async (req:any, reply: FastifyReply) => {
//     const id = uuidv4();
//     const created_at = new Date();
//     const updated_at = new Date();
//     try{
//     const { name, email, password,confirmPassword,avatar,departament } = req.body;
//     const query = {
//         text: 'INSERT INTO users(name,email,password,confirmPassword,avatar,departament) VALUES($1,$2,$3,$4,$5,$6) RETURNING*',
//         values: [name, email, password,confirmPassword,avatar,departament],
//     };
    
//         const newUser= await client.query(query);
//         reply.code(201).send(newUser);
//         return {created: true};
//     }catch(err) {
//         reply.status(400).send('Error inserting user');
//     }
// }); 
//     done();
// }
// export {usersRoutes};


// const allUsers = async (app:any,req:any, reply: any) => {
//     const client = app.db.client;
//     try {
//         const users = await client.query('SELECT * FROM users');
//         reply.send(users);
//     } catch (err) {
//         reply.code(500).send('User is not found');
//     }
// };

// const addUser = async (app:any,req:any, reply: any) => {
//     const client = app.db.client;
//     const id = uuidv4();
//     const created_at = new Date();
//     const updated_at = new Date();
//     try{
//     const { name, email, password,confirmPassword,avatar,departament } = req.body;
//     const query = {
//         text: 'INSERT INTO users(name,email,password,confirmPassword,avatar,departament) VALUES($1,$2,$3,$4,$5,$6) RETURNING*',
//         values: [name, email, password,confirmPassword,avatar,departament],
//     };
    
//         const newUser= await client.query
//         (query);
//         reply.code(201).send(newUser);
//         return {created: true};
//     }catch(err) {
//         reply.status(400).send('Error inserting user');
//     }
// };
// const findById = async (app:any,req:any, reply: any) => {
//     const client = app.db.client;
//     const id = req.params.id;
//     const query = {
//         text: 'SELECT * FROM users WHERE id = $1',
//         values: [id],
//     };
//     try{
//         const user = await client.query(query);
//         reply.code(200).send(user);
//         return {created: true};
//     }catch(err) {
//         throw new Error('Error inserting user');
//     }
// };

// const updateUser = async (app:any,req:any, reply: any) => {
//     const client = app.db.client;
//     const id = req.params.id;
//     const updated_at = new Date();
//     const { name, email, password,confirmPassword,avatar,departament } = req.body;
//     const query = {
//         text: 'UPDATE users SET name = $1, email = $2, password = $3, confirmPassword = $4, avatar = $5, departament = $6, updated_at = $7 WHERE id = $8 RETURNING*',
//         values: [name, email, password,confirmPassword,avatar,departament,updated_at,id],
//     };
//     try{
//         const user = await client.query(query);
//         reply.code(200).send(user);
//         return {created: true};
//     }catch(err) {
//         throw new Error('Error inserting user');
//     }
// };

// const deleteUser = async (app:any,req:any, reply: any) => {
    
//     const id = req.params.id;
//     try{
//     const query = {
//         text: 'DELETE FROM users WHERE id = $1',
//         values: [id],
//     };
//     reply.code(200).send('User deleted');
// }catch(err) {
//     throw new Error('Error deleting user');
// }
// };
    
// export default{ allUsers, addUser, findById, updateUser, deleteUser};
