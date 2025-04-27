import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

export interface IProfissionais {
  id: number;
  name: string;
  document: string;
  imagem?: string;
  site?: string;
  instagram?: string;
  telefone: string;
  whatsapp: string;
  email: string;
  crm?: string;
  crp?: string;
  categoria: string;
  categoria2?: string;
  localdeAtendimento: string;
  valorConsulta: number;
  sobreMim?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deleteAt?: Date;
}

@Table({
  tableName: 'profissionais',
  timestamps: true,
  paranoid: true,
})
export class Profissionais extends Model<IProfissionais> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  document: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  imagem?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  site?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  instagram?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telefone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  whatsapp: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  crm?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  crp?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  categoria: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  categoria2?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  localdeAtendimento: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  valorConsulta: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  sobreMim?: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  createdAt?: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  updatedAt?: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deletedAt?: Date;
}
