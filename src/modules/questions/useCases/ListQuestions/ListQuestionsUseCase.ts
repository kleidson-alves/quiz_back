import { inject, injectable } from "tsyringe";

import Question from "../../models/Question";
import { IQuestionsRepository } from "../../repositories/IQuestionsRepository";

@injectable()
class ListQuestionsUseCase {
    constructor(
        @inject("QuestionsRepository")
        private questionsRepository: IQuestionsRepository
    ) {}

    async execute(): Promise<Question[]> {
        const questions = await this.questionsRepository.all();

        return questions;
    }
}

export default ListQuestionsUseCase;
