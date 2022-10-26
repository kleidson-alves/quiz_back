import { Router } from "express";

import questionsRoutes from "./questions.routes";

const routes = Router();

routes.use("/questions", questionsRoutes);

export default routes;
