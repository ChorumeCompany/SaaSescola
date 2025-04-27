'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('schools', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      // Dados básicos
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true },
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      representante: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      site: {
        type: Sequelize.STRING,
      },
      instagram: {
        type: Sequelize.STRING,
      },
      whatsapp: {
        type: Sequelize.STRING,
      },
      esferaAdministrativa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valorMensalidade: {
        type: Sequelize.DECIMAL(10, 2),
      },
      situacaoFuncionamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Quantitativos
      qntSalas: {
        type: Sequelize.INTEGER,
      },
      qntAlunos: {
        type: Sequelize.INTEGER,
      },
      qntProfessores: {
        type: Sequelize.INTEGER,
      },
      qntTurmas: {
        type: Sequelize.INTEGER,
      },
      qntFuncionarios: {
        type: Sequelize.INTEGER,
      },
      sobre: {
        type: Sequelize.TEXT,
      },
      // Endereço (mantido na mesma tabela)
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      // Infraestrutura (todos como boolean)
      temQuadraCoberta: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temQuadraNaoCoberta: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temInternet: {
        // Corrigido para 'temInternet' (tinha 'temInternt' antes)
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temBandaLarga: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temLaboratorioInformatica: {
        // Corrigido para 'temLaboratorioInformatica'
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temLaboratorioCiencia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temRefeitorio: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temAuditorio: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temDespensa: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temAumoxarifado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temPatioCoberto: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temPatioNaoCoberto: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temPatioInfantil: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temCozinha: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temBiblioteca: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temSanitarioNoPredio: {
        // Corrigido para 'temSanitarioNoPredio'
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temSanitarioForaPredio: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temBercario: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temSalaLeitura: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temAreaVerde: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temAguaFiltrada: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temCreche: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temEnsinoFundamental: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temEnsinoMedio: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temEnsinoMedioNormal: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temEnsinoMedioProfissional: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temEnsinoMedioIntegrado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temEducacaoJovemAdulto: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      temEducacaoIndigena: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      banheiroTemChuveiro: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      ofereceAlimentacao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      // Acessibilidade
      acessoCadeirante: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      pisoTatil: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      banheiroAcessivel: {
        // Padronizado para camelCase (era 'BanheiroAcessivel')
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      elevador: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      salaDescompressao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      // Staff
      pessoaDeLibras: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      acompanhanteParaAlunos: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      // Timestamps
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('schools');
  },
};
