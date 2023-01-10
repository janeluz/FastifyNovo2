import { app } from "app";
import { FastifyRequest } from "fastify";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../user/repositories/usersRepository";


interface IPayload {
  sub: string;
}

// app.addHook('preHandler',(request: any, reply:any, done: any)=>{

export async function ensureAuthenticated(
  request: any,
  reply: any,
  done: any,
) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('token missing');
  }

  // [0] = Beaher
  // [1] = numero token

  const [, token] = authHeader.split(' ');
  try {
    const { sub: id } = verify(
      token,
      '80db8eb05ec0a7b26a10db03cdd5dcc73',
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(id);

    if (!user) {
      throw new Error('User does not exists!');
    }
    request.user = {
      id: id,
    };

    return done();
  } catch (error) {
    throw new Error('invalid token');
  }

}
