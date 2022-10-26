import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import Question from "./Question";

@Entity("options")
class Option {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    description: string;

    @ManyToOne(() => Question, (question) => question.options)
    @JoinColumn({ name: "question_id" })
    question_id: Question;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export default Option;
