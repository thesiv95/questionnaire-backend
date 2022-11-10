import { Table, Column, Model } from 'sequelize-typescript';
import TableNames from 'src/consts/tableNames.enum';

@Table({ tableName: TableNames.User, updatedAt: false })
export class UserModel extends Model {

    @Column({autoIncrement: true, primaryKey: true})
    id: number;

    @Column({allowNull: false})
    name: string;
}