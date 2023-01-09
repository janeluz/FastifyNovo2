import { app } from "app";
import { FastifyRequest } from "fastify";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../repositories/usersRepositories";


interface IPayload {
  sub: string;
}

// app.addHook('preHandler',(request: any, reply:any, done: any)=>{
  
export async function ensureAuthenticated(
  request: any,
  reply: any,
  done: any,
 ) {

  const authHeader =  request.headers.authorization;
  if (!authHeader) {
    throw new Error('token missing');
  }

  // [0] = Beaher
  // [1] = numero token

  const [, token] = authHeader.split(' ');
  try {
    const { sub: user_id } = verify(
      token,
      '80db8eb05ec0a7b26a10db03cdd5dcc73',
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user =  usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User does not exists!');
    }
    request.user = {
      id: user_id,
    };

    return done();
  } catch (error) {
    throw new Error('invalid token');
  }
  
}
