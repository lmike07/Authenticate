import { Request, Response } from "express";
import { AuthSchema, refreshTokenSchema, RefreshTokenSchemaInterface } from "../schemas/AuthSchema";
import AuthService from "../services/AuthService";

class AuthController {

    async authenticate(req: Request, res: Response) {
        try {

            const authService = new AuthService();

            const dataValidate = await AuthSchema.validate(req.body, { stripUnknown: true });
            const resultAuth = await authService.authenticate(dataValidate);
            res.status(200).json(resultAuth);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
        
    }

    async refreshToken(req: Request, res: Response) {
        try {
            
            const authService = new AuthService();
            const dataValidate: RefreshTokenSchemaInterface = await refreshTokenSchema.validate(req.body, { stripUnknown: true });

            const resultRefreshToken = await authService.refreshToken(dataValidate);

            res.status(200).json(resultRefreshToken);
            
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

}

export default AuthController; 