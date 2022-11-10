import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { AnswerListModel } from './answerList.model';
import { QuestionModel } from './question.model';
import { UserModel } from './user.model';
import TableNames from 'src/consts/tableNames.enum';

@Table({ tableName: TableNames.UserAnswers })
export class UserAnswersModel extends Model {

    @Column({autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => UserModel)
    @Column({field: 'user_id'})
    user_id: number;

    @ForeignKey(() => QuestionModel)
    @Column({field: 'question_id'})
    question_id: number;

    // Non-mandatory fields

    // for choose-type question
    @ForeignKey(() => AnswerListModel)
    @Column({field: 'answer_id', allowNull: true })
    answer_id: number;

    // for input-type question
    @Column({ allowNull: true })
    free_answer: string;

}