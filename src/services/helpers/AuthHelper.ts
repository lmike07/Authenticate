import jwt from "jsonwebtoken";

export const generateJWT = (payload: any, expiresIn: string): string => {
    const option = { 
        expiresIn 
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string)
    return token;
};

export const verifyJWT = (jwt_token: string): any => {
    const verify = jwt.verify(jwt_token, process.env.JWT_SECRET as string);
    return verify;
};


