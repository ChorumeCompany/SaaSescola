'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // First create the enum type if it doesn't exist
    await queryInterface.sequelize.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_users_roleEnum') THEN
          CREATE TYPE "enum_users_roleEnum" AS ENUM ('US', 'PS', 'ES');
        END IF;
      END$$;
    `);

    // Then create the table with the enum column
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      document: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
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
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      oldPassword: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      passwordExpires: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      securityQuestion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      securityResponse: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      roleEnum: {
        type: Sequelize.ENUM('US', 'PS', 'ES'),
        allowNull: false,
        defaultValue: 'US',
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    // Optionally drop the enum type if you want
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_users_roleEnum"',
    );
  },
};
