'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profissionais', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      site: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      instagram: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      crm: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      crp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoria2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      localdeAtendimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valorConsulta: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      sobreMim: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
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

    // Adicionando índices para campos que podem ser frequentemente consultados
    await queryInterface.addIndex('profissionais', ['categoria']);
    await queryInterface.addIndex('profissionais', ['localdeAtendimento']);
    await queryInterface.addIndex('profissionais', ['valorConsulta']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('profissionais');
  },
};
