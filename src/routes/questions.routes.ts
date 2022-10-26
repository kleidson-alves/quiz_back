import { Router } from "express";

import CreateQuestionController from "../modules/questions/useCases/CreateQuestion/CreateQuestionController";
import ListQuestionsController from "../modules/questions/useCases/ListQuestions/ListQuestionsController";

const questionsRoutes = Router();

const listQuestionsController = new ListQuestionsController();
const createQuestionController = new CreateQuestionController();

questionsRoutes.get("/", listQuestionsController.handle);

questionsRoutes.post("/", createQuestionController.handle);

export default questionsRoutes;
