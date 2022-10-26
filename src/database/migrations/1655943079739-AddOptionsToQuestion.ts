import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddOptionsToQuestion1655943079739 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "options",
            new TableForeignKey({
                name: "options_fk",
                referencedTableName: "questions",
                referencedColumnNames: ["id"],
                columnNames: ["question_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("options", "options_fk");
    }
}
