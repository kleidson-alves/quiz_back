import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuestions1655934014980 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "questions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "statement",
                        type: "varchar",
                    },
                    {
                        name: "answer",
                        type: "varchar",
                    },
                    {
                        name: "tip",
                        type: "varchar",
                    },
                    {
                        name: "difficulty",
                        type: "varchar",
                    },
                    {
                        name: "reference",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("questions");
    }
}
