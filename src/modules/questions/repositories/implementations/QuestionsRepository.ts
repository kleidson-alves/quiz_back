import { Repository } from "typeorm";

import dataSource from "../../../../database";
import Option from "../../models/Option";
import Question from "../../models/Question";
import {
    ICreateQuestionDTO,
    IQuestionsRepository,
} from "../IQuestionsRepository";

class QuestionsRepository implements IQuestionsRepository {
    questionsRepository: Repository<Question>;

    constructor() {
        this.questionsRepository = dataSource.getRepository(Question);
    }
    async all(): Promise<Question[]> {
        const questions = await this.questionsRepository.find({
            relations: {
                options: true,
            },
        });

        return questions;
    }

    async findByStatement(statement: string): Promise<Question | null> {
        const question = await this.questionsRepository.findOneBy({
            statement,
        });

        return question;
    }

    async create({
        statement,
        answer,
        difficulty,
        options,
        reference,
        tip,
    }: ICreateQuestionDTO): Promise<void> {
        const question = this.questionsRepository.create({
            statement,
            answer,
            difficulty,
            tip,
            reference,
        });

        const optionsRepository = dataSource.getRepository(Option);

        await this.questionsRepository.save(question);

        options.map(async (option) => {
            const newOption = optionsRepository.create({
                description: option,
                question_id: question,
            });

            await optionsRepository.save(newOption);
        });
    }
}

export default QuestionsRepository;
