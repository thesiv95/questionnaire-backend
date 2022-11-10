import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { QuestionModel } from './question.model';
import TableNames from 'src/consts/tableNames.enum';

@Table({ tableName: TableNames.AnswerList, timestamps: false })
export class AnswerListModel extends Model {

    @Column({autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => QuestionModel)
    @Column({field: 'QuestionModelId'}) // sequelize syntax
    question_id: number;

    @Column({allowNull: false})
    line: string;

    // Tell FE to show Other input
    @Column({defaultValue: false})
    has_other_option: boolean;
}