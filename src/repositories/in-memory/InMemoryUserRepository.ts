import { User } from "../../models/User";

class InMemoryUserRepository {

    private _users: User[];

    constructor() {
        this._users = [{username: "Luis", email: "titan@contact.com",
            password: "$2b$10$6XEdTsmd5K9r3cHqdqGTaez8QjQoDiarQHXU7PTwAsxRXC/fWF3FC"}];
    }

    async findByEmail(email: string) {
        const u = await this._users.filter(u => u.email === email);
        return u[0];
    }

}  

export default InMemoryUserRepository;