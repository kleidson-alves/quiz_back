import { container } from "tsyringe";

import QuestionsRepository from "../../modules/questions/repositories/implementations/QuestionsRepository";

container.registerSingleton<QuestionsRepository>(
    "QuestionsRepository",
    QuestionsRepository
);
