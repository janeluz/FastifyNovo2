


import { UsersRepository } from "../../../../src/user/repositories/usersRepository";



describe('List Users ', () => {
    beforeEach(() => {

        it('should be able to list a users', async () => {
            const usersRepository = new UsersRepository();
            const users = await usersRepository.listAllUser();
            console.log(users);
            expect(users);
        });
    }
    )
})
