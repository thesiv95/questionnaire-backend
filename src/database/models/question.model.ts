import QuestionTypes from 'src/consts/questionTypes.enum';
import { Table, Column, Model } from 'sequelize-typescript';
import TableNames from 'src/consts/tableNames.enum';

@Table({ tableName: TableNames.Question, timestamps: false })
export class QuestionModel extends Model {

    @Column({autoIncrement: true, primaryKey: true})
    id: number;

    @Column
    title: string;

    @Column
    question_type: QuestionTypes;

    @Column({defaultValue: false})
    is_mandatory: boolean;
}