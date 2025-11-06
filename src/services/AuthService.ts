import { AuthSchemaInterface } from "../schemas/AuthSchema";
import InMemoryUserRepository from "../repositories/in-memory/InMemoryUserRepository";
import { generateJWT } from "./helpers/AuthHelper";
import bcryt from "bcrypt";


class AuthService {

    async authenticate(dataValidate: AuthSchemaInterface) {
        const userRepository = new InMemoryUserRepository();

        const dataUser = await userRepository.findByEmail(dataValidate.email);

        if (!dataUser) {
            throw new Error("Something went wrong, email or password incorrect");
        }

        const isPasswordValid = await bcryt.compare(dataValidate.password, dataUser.password);
        if (!isPasswordValid) {
            throw new Error("Something went wrong, email or password incorrect");
        }

        dataUser.password = "Password hidden for security";

        const token = generateJWT(dataUser, process.env.JWT_TOKEN_EXPIRES_IN as string);
        const refresh_token = generateJWT(dataUser, process.env.JWT_REFRESH_TOKEN_EXPIRES_IN as string);
    
        return {token, refresh_token};
    }

    async refreshToken() {}

}

export default AuthService;