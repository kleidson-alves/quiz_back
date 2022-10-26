import Question from "../models/Question";

interface ICreateQuestionDTO {
    statement: string;

    answer: string;

    options: string[];

    tip: string;

    difficulty: string;

    reference: string;
}

interface IQuestionsRepository {
    findByStatement(statement: string): Promise<Question | null>;
    create({
        statement,
        answer,
        options,
        difficulty,
        reference,
        tip,
    }: ICreateQuestionDTO): Promise<void>;
    all(): Promise<Question[]>;
}

export { IQuestionsRepository, ICreateQuestionDTO };
