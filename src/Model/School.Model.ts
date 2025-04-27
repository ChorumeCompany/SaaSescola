import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

export interface ISchool {
  id: number;
  name: string;
  telefone: string;
  email: string;
  cnpj: string;
  representante: string;
  site: string;
  instagram: string;
  whatsapp: string;
  esferaAdministrativa: string;
  valorMensalidade: number;
  situacaoFuncionamento: string;
  qntSalas: number;
  qntAlunos: number;
  qntProfessores: number;
  qntTurmas: number;
  qntFuncionarios: number;
  sobre: string;
  //endereço
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  //infraestrutura
  temQuadraCoberta: boolean;
  temQuadraNaoCoberta: boolean;
  temInternet: boolean;
  temBandaLarga: boolean;
  temLaboratorioInformatica: boolean;
  temLaboratorioCiencia: boolean;
  temRefeitorio: boolean;
  temAuditorio: boolean;
  temDespensa: boolean;
  temAumoxarifado: boolean;
  temPatioCoberto: boolean;
  temPatioNaoCoberto: boolean;
  temPatioInfantil: boolean;
  temCozinha: boolean;
  temBiblioteca: boolean;
  temSanitarioNoPredio: boolean;
  temSanitarioForaPredio: boolean;
  temBercario: boolean;
  temSalaLeitura: boolean;
  temAreaVerde: boolean;
  temAguaFiltrada: boolean;
  temCreche: boolean;
  temEnsinoFundamental: boolean;
  temEnsinoMedio: boolean;
  temEnsinoMedioNormal: boolean;
  temEnsinoMedioProfissional: boolean;
  temEnsinoMedioIntegrado: boolean;
  temEducacaoJovemAdulto: boolean;
  temEducacaoIndigena: boolean;
  banheiroTemChuveiro: boolean;
  ofereceAlimentacao: boolean;
  //acessibilidade
  acessoCadeirante: boolean;
  pisoTatil: boolean;
  banheiroAcessivel: boolean;
  elevador: boolean;
  salaDescompressao: boolean;
  //staff
  pessoaDeLibras: boolean;
  acompanhanteParaAlunos: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deleteAt?: Date;
}

@Table({
  tableName: 'schools',
  timestamps: true,
  paranoid: true,
})
export class School extends Model<ISchool> {
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
  telefone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cnpj: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  representante: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  site: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  instagram: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  whatsapp: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  esferaAdministrativa: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  situacaoFuncionamento: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  qntSalas: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  qntAlunos: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  qntProfessores: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  qntTurmas: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  qntFuncionarios: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cep: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  logradouro: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  numero: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  complemento: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bairro: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cidade: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  estado: string;

  // Infraestrutura
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temQuadraCoberta: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temQuadraNaoCoberta: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temInternet: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temBandaLarga: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temLaboratorioInformatica: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temLaboratorioCiencia: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temRefeitorio: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temAuditorio: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temDespensa: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temAumoxarifado: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temPatioCoberto: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temPatioNaoCoberto: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temPatioInfantil: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temCozinha: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temBiblioteca: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temSanitarioNoPredio: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temSanitarioForaPredio: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temBercario: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temSalaLeitura: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temAreaVerde: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temAguaFiltrada: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temCreche: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temEnsinoFundamental: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temEnsinoMedio: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temEnsinoMedioNormal: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temEnsinoMedioProfissional: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temEnsinoMedioIntegrado: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temEducacaoJovemAdulto: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  temEducacaoIndigena: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  banheiroTemChuveiro: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  ofereceAlimentacao: boolean;

  // Acessibilidade
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  acessoCadeirante: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  pisoTatil: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  banheiroAcessivel: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  elevador: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  salaDescompressao: boolean;

  // Staff
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  pessoaDeLibras: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  acompanhanteParaAlunos: boolean;

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
