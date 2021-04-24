import { getCustomRepository, Repository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";

class UsersService {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async findByEmail(email: string) {
        const userExists = await this.usersRepository.findOne({
            email
        });

        return userExists
    }

    async create(email: string) {

        const userExists = await this.findByEmail(email);

        if (userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;

    }
}

export { UsersService };