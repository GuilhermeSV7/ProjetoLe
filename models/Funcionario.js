// models/funcionario.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // Certifique-se de importar sua instância do Sequelize corretamente

const Funcionario = sequelize.define('Funcionario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  funcao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataIngresso: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tableName: 'Funcionario'
});

module.exports = Funcionario;
