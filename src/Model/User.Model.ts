import {
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
} from 'sequelize-typescript';

export interface IUser {
  id: number;
  cpf: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  oldPassword: string;
  passwordExpires: Date;
  securityQuestion: string;
  securityResponse: string;
  createdAt?: Date;
  updatedAt?: Date;
  deleteAt?: Date;
}

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true,
})
export class Users extends Model<IUser> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cpf: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  oldPassword: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  passwordExpires: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  securityQuestion: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  securityResponse: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  updatedAt!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deletedAt!: Date;
}
