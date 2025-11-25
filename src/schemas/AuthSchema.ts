import Yup, { object, string } from "yup";

export const AuthSchema = object().shape({
    email: string().email().required(),
    password: string().min(6).required(),
});

export const refreshTokenSchema = object().shape({
    token: string().required(),
    refresh_token: string().required()
});

export type AuthSchemaInterface = Yup.InferType<typeof AuthSchema>;
export type RefreshTokenSchemaInterface = Yup.InferType<typeof refreshTokenSchema>;