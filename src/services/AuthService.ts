import { AuthSchemaInterface } from "../schemas/AuthSchema";

class AuthService {

    async authenticate(dataValidate: AuthSchemaInterface) {}

    async refreshToken() {}

}

export default AuthService;