import Yup, { object, string } from "yup";

export const AuthSchema = object().shape({
    email: string().email().required(),
    password: string().min(6).required(),
});

export type AuthSchemaInterface = Yup.InferType<typeof AuthSchema>;