import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import Option from "./Option";

@Entity("questions")
class Question {
    @PrimaryColumn("uuid")
    id?: string;

    @Column()
    statement: string;

    @OneToMany(() => Option, (option) => option.question_id)
    options: Option[];

    @Column()
    answer: string;

    @Column()
    tip: string;

    @Column()
    difficulty: string;

    @Column()
    reference: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export default Question;
