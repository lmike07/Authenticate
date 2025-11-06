import jwt from "jsonwebtoken";

export const generateJWT = (payload: any, expiresIn: string): string => {
    const option = { 
        expiresIn 
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string)
    return token;
};
