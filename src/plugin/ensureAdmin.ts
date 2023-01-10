import { UsersRepository } from "../user/repositories/usersRepository";

export async function ensureAdmin(
  request: any,
  reply: any,
  done: any,
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new Error("User isn't admin!");
  }

  return done();
}