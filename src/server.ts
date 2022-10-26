import "reflect-metadata";

import express from "express";

import { createConnection } from "./database";
import routes from "./routes";

import "./shared/containers";

createConnection();

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
    console.log("server is running!");
});
