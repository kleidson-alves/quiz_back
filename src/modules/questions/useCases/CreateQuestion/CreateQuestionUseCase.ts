import { inject, injectable } from "tsyringe";

import { IQuestionsRepository } from "../../repositories/IQuestionsRepository";

interface IRequest {
    statement: string;
    answer: string;
    difficulty: string;
    tip: string;
    reference: string;
    options: string[];
}

@injectable()
class CreateQuestionUseCase {
    constructor(
        @inject("QuestionsRepository")
        private questionRepository: IQuestionsRepository
    ) {}

    async execute({
        statement,
        answer,
        difficulty,
        reference,
        tip,
        options,
    }: IRequest) {
        this.questionRepository.create({
            statement,
            answer,
            difficulty,
            tip,
            reference,
            options,
        });
    }
}

export default CreateQuestionUseCase;
