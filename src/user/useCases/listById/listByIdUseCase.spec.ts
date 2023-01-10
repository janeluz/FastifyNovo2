import { UsersRepository } from "src/repositories/usersRepositories";
import { User } from "src/user/dto/userModel";


describe('List User By Id', () => {
    beforeEach(()=> {
  
    it('should be able to list a user by id', async () => {
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById('1');
        console.log(user);
        expect(user).toHaveProperty('id');
    });
    }
    )
})

