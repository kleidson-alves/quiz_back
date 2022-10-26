import { DataSource } from "typeorm";

import Option from "../modules/questions/models/Option";
import Question from "../modules/questions/models/Question";

const dataSource = new DataSource({
    type: "postgres",
    port: 5432,
    database: "myquiz",
    username: "kleidson",
    password: "postgres",
    entities: [Option, Question],
    migrations: ["src/database/migrations/*{.ts,.js}"],
});

export function createConnection(host = "database"): Promise<DataSource> {
    return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
