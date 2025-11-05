
import Express from "express";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";    

dotenv.config();


const server = Express();

server.use(cors());     
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));

server.use(router);

const PORT = process.env.PORT || 4000;

server.listen(PORT);