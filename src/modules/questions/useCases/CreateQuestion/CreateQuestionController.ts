import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateQuestionUseCase from "./CreateQuestionUseCase";

class CreateQuestionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { statement, answer, options, difficulty, reference, tip } =
            request.body;

        const createQuestionUsecase = container.resolve(CreateQuestionUseCase);

        await createQuestionUsecase.execute({
            statement,
            answer,
            options,
            difficulty,
            reference,
            tip,
        });

        return response.status(201).send();
    }
}

export default CreateQuestionController;
