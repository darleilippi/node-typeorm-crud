import "reflect-metadata";

import express from "express";

import "./database";
import { routes } from "./routes/routes";

const server = express();

server.use(express.json());

server.use(routes);

server.listen(3333, () => console.log("Server is running"))
